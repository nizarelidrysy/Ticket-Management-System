const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Setup
const dbPath = path.resolve(__dirname, 'orders.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      fullName TEXT,
      email TEXT,
      phone TEXT,
      tickets TEXT,
      totalPrice REAL,
      date TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating table:", err.message);
        }
    });
  }
});

// Routes

// GET /api/orders - Fetch all orders (Admin)
app.get('/api/orders', (req, res) => {
  const sql = 'SELECT * FROM orders ORDER BY id DESC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// POST /api/orders - Create a new order
app.post('/api/orders', (req, res) => {
  const { title, fullName, email, phone, tickets, totalPrice, date } = req.body;
  
  const sql = 'INSERT INTO orders (title, fullName, email, phone, tickets, totalPrice, date) VALUES (?,?,?,?,?,?,?)';
  const params = [title, fullName, email, phone, JSON.stringify(tickets), totalPrice, date];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: { id: this.lastID },
      id: this.lastID
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
