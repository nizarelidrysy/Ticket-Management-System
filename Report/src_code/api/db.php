<?php
// api/db.php

$db_path = __DIR__ . '/../server/orders.db'; // Use the same DB location
// Ensure the directory exists/is writable. In this case, we reused the Node one.

try {
    $pdo = new PDO("sqlite:$db_path");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Create tables if not exists
    $pdo->exec("CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        fullName TEXT,
        email TEXT,
        phone TEXT,
        totalPrice REAL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
    
    $pdo->exec("CREATE TABLE IF NOT EXISTS blocked_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        full_name TEXT,
        reason TEXT,
        blockedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
    
    // Attempt to add full_name column if it doesn't exist (for existing DBs)
    try {
        $pdo->exec("ALTER TABLE blocked_users ADD COLUMN full_name TEXT");
    } catch (PDOException $e) {
        // Column likely already exists, ignore
    }

} catch (PDOException $e) {
    die("Database Connection Error: " . $e->getMessage());
}
?>
