<?php
// api/blocked_users.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json");

require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    try {
        $stmt = $pdo->query("SELECT * FROM blocked_users ORDER BY id DESC");
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Cast ID to string
        $users = array_map(function($user) {
            $user['id'] = (string)$user['id'];
            return $user;
        }, $users);

        echo json_encode(['message' => 'success', 'data' => $users]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
} elseif ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['email'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Email is required']);
        exit;
    }

    try {
        $blockedAt = date('Y-m-d H:i:s');
        $stmt = $pdo->prepare("INSERT INTO blocked_users (email, full_name, reason, blockedAt) VALUES (:email, :full_name, :reason, :blockedAt)");
        $stmt->execute([
            ':email' => $data['email'],
            ':full_name' => $data['fullName'] ?? 'Unknown',
            ':reason' => $data['reason'] ?? 'Admin blocked',
            ':blockedAt' => $blockedAt
        ]);
        echo json_encode(['message' => 'User blocked successfully']);
    } catch (PDOException $e) {
        http_response_code(400);
        echo json_encode(['error' => 'User already blocked or database error']);
    }
} elseif ($method === 'DELETE') {
     // Expect email in query param? or ID? Let's use ID for delete to be safe, or email if provided.
     // Let's use ID passed in URL mostly, but here basic raw body.
     // Actually GET param is easiest for delete in simple PHP
     
     $id = $_GET['id'] ?? null;
     if (!$id) {
         http_response_code(400);
         echo json_encode(['error' => 'ID required']);
         exit;
     }
     
     $stmt = $pdo->prepare("DELETE FROM blocked_users WHERE id = ?");
     $stmt->execute([$id]);
     echo json_encode(['message' => 'success']);

} elseif ($method === 'OPTIONS') {
    http_response_code(200);
}
?>
