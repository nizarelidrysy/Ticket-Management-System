# 🎫 Ticket.ma | World Cup 2030 Ticketing System

![World Cup 2030](https://img.shields.io/badge/World_Cup-2030-emerald?style=for-the-badge) ![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react) ![PHP](https://img.shields.io/badge/PHP-8.0+_SQLite-777BB4?style=for-the-badge&logo=php) ![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)

**Ticket.ma** is a next-generation ticketing platform designed for the **2030 FIFA World Cup** hosted by Morocco, Spain, and Portugal. It combines a high-performance React frontend with a lightweight, zero-configuration PHP/SQLite backend to deliver a seamless booking experience.

---

## ✨ Key Features

### 🌍 For Fans (Frontend)
-   **Immersive Experience**: Smooth animations, glassmorphism UI, and responsive design built with **Tailwind CSS** and **Framer Motion**.
-   **Direct Booking**: Simplified "One-Click" checkout flow—no shopping cart friction.
-   **Smart Search**: Filter matches by team (e.g., "Morocco") or date instantly.
-   **Dynamic Data**: Real-time stadium info, match schedules, and categorized pricing.
-   **Multi-Identity Support**: Optimized for international visitors with automated form handling.

### 🛡️ For Administrators (Backend)
-   **Secure Dashboard**: Accessed via a "Secret Shield" login with a **Biometric "Face ID" Simulation** authentication flow.
-   **Order Management**: View, delete, and manage thousands of orders with high-performance formatting.
-   **Security Controls**: 
    -   **Block/Ban Users**: Prevent malicious actors from purchasing.
    -   **Purge Data**: Deep-delete functionality to wipe user data strictly and completely from the database.
-   **Analytics**: Real-time total revenue calculation and order tracking.

---

## 🛠️ Tech Stack

This project is architected for **portability** and **performance**:

-   **Frontend**:
    -   [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) (Blazing fast build tool)
    -   [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling)
    -   [Framer Motion](https://www.framer.com/motion/) (Production-ready animations)
    -   [Lucide React](https://lucide.dev/) (Beautiful open-source icons)

-   **Backend**:
    -   **PHP 8.0+**: Handles API requests (RESTful).
    -   **SQLite**: Zero-config, serverless database engine (ideal for portability).
    -   **PDO Security**: All database interactions use Prepared Statements to prevent SQL injection.

---

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites
-   Node.js (v16+)
-   PHP (v8.0+)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/ticket-ma.git
    cd ticket-ma
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the Backend (PHP)**
    Open a terminal and start the built-in PHP server:
    ```bash
    php -S localhost:8000 -t .
    ```

4.  **Run the Frontend (React)**
    Open a new terminal and fire up Vite:
    ```bash
    npm run dev
    ```

5.  **Visit the App**
    Open `http://localhost:5173` to browse tickets.
    Access the Admin Panel via the shield icon in the header (or `/admin`).

---

## 📂 Project Structure

```
ticket-ma/
├── public/              # Static assets (Logos, Favicons)
├── src/                 # React Frontend
│   ├── components/      # Reusable UI (Navbar, Cards, Inputs)
│   ├── pages/           # Route views (Home, Matches, Admin)
│   ├── data/            # Mock Data (Teams, Stadiums)
│   └── main.jsx         # App Entry Point
├── api/                 # PHP Backend
│   ├── db.php           # Database Connection (SQLite)
│   ├── orders.php       # Order Management API
│   └── blocked_users.php# User Ban System API
├── server/              # Database Storage
│   └── orders.db        # SQLite Database File
└── README.md            # You are here!
```

---

## 🤝 Contributing

We believe in the power of open source to build the best World Cup experience. Contributions are welcome!

### How to Contribute
1.  **Fork the Project** (Click the 'Fork' button top right)
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

### Ideas for Contributions
-   [ ] Payment Gateway Integration (Stripe/PayPal)
-   [ ] QR Code Ticket Generation
-   [ ] Interactive 3D Seat Map
-   [ ] Multi-language Support (Arabic/Spanish/Portuguese)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ for the game.</p>
  <p><b>Morocco x Spain x Portugal</b></p>
</div>
