<?php
// api/orders.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json");

// Suppress errors to avoid polluting JSON output
error_reporting(0);
ini_set('display_errors', 0);

require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    try {
        $stmt = $pdo->query("SELECT * FROM orders ORDER BY id DESC");
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Fix for Big Integer IDs: Cast to string for JS compatibility
        $orders = array_map(function($order) {
            $order['id'] = (string)$order['id'];
            return $order;
        }, $orders);

        echo json_encode(['message' => 'success', 'data' => $orders]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
} elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Validate inputs
    if (!isset($data['email']) || !isset($data['fullName'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        exit;
    }

    // Check if user is blocked (Case Insensitive)
    $stmt = $pdo->prepare("SELECT id FROM blocked_users WHERE LOWER(email) = LOWER(:email)");
    $stmt->execute([':email' => $data['email']]);
    if ($stmt->fetch()) {
        http_response_code(403);
        echo JSON_encode(['error' => 'This user is blocked from making purchases.']);
        exit;
    }

    try {
        // Generate Custom ID: YYYYMMDDHHMMSS + 3 random digits (e.g., 20301225103000123)
        // Ensure it fits in SQLite INTEGER (signed 64-bit is max ~9e18, this is ~2e17, so it fits)
        $customId = date('YmdHis') . rand(100, 999);
        $serverDate = date('Y-m-d H:i:s'); // Accurate Server Time

        // Explicitly insert 'id'
        $stmt = $pdo->prepare("INSERT INTO orders (id, title, fullName, email, phone, tickets, totalPrice, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $customId,
            $data['title'],
            $data['fullName'],
            $data['email'],
            $data['phone'],
            json_encode($data['tickets']),
            $data['totalPrice'],
            $serverDate
        ]);
        
        echo json_encode(['message' => 'success', 'id' => $customId]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
} elseif ($method === 'OPTIONS') {
    http_response_code(200);
} elseif ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing order ID']);
        exit;
    }

    try {
        $stmt = $pdo->prepare("DELETE FROM orders WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(['message' => 'success']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}
?>
