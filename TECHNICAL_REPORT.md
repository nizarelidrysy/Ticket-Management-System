# Technical Report: Ticket.ma (WC 2030 Ticketing)

## Executive Summary
This report outlines the technical architecture, design decisions, and codebase structure of the **Ticket.ma** World Cup 2030 Ticketing System. The application is a modern Single Page Application (SPA) built with **React** and **Vite**, featuring a **PHP** backend for order processing and user management, utilizing **SQLite** for zero-configuration data persistence.

## 1. Architecture Overview

### Frontend
-   **Framework**: React 18 (via Vite for fast tooling).
-   **Styling**: Tailwind CSS (Utility-first framework for rapid, responsive UI).
-   **Routing**: React Router DOM v6.
-   **Animations**: Framer Motion (Page transitions, micro-interactions).
-   **Icons**: Lucide React.
-   **State Management**: React `useState`/`useEffect` + URL state (via `location.state` for checkout flow).

### Backend
-   **Language**: PHP 8.x.
-   **Database**: SQLite (`server/orders.db`).
-   **API Design**: RESTful-style endpoints (`orders.php`, `blocked_users.php`).
-   **Security**: PDO for SQL injection prevention, CORS headers for decoupled frontend dev.

## 2. Key Features & Implementation

### A. Dynamic Match & Team Data
-   **Data Source**: `src/data/mockData.js` acts as the single source of truth for Matches, Teams, and Stadiums, allowing for rapid prototyping and easy eventual migration to a database.
-   **Search Logic**: Implemented in `Layout.jsx`, the intelligent search checks if a selected team is scheduled to play (`MATCHES.some(...)`) before navigating, providing immediate feedback to the user.

### B. Purchase Flow (Direct Checkout)
-   **Design Choice**: Removed the traditional "Cart" to streamline the high-demand ticketing process.
-   **Data Flow**: `MatchDetails.jsx` -> `navigate('/checkout', { state: { match, ... } })` -> `Checkout.jsx`.
-   **Validation**: Frontend form validation + Backend parameter checking.

### C. Admin & Security
-   **Blocking System**: Emails can be blocked case-insensitively (`LOWER(email) = LOWER(:input)`).
-   **Dashboard**: `Admin.jsx` allows viewing orders, blocking users (by email/name), and deleting orders.
-   **Data Integrity**: Orders are stored with a full snapshot of the purchase details (JSON encoded tickets).

## 3. Folder Structure
```
/
├── api/                    # PHP Internal API
│   ├── db.php             # Database connection (SQLite/PDO)
│   ├── orders.php         # Order CRUD (GET, POST, DELETE)
│   └── blocked_users.php  # User Blocklist Management
├── extra/                  # SQL Schemas & Utils
├── public/                 # Static Assets
│   ├── assets/            # Logos, Images
├── server/                 # Database File Storage
│   └── orders.db          # SQLite Database
├── src/
│   ├── components/         # Reusable UI (Layout, SeatMap, etc.)
│   ├── data/              # Mock Data (Teams, Matches)
│   ├── pages/             # Route Components (Home, MatchDetails, Admin)
│   ├── App.jsx            # Main Router Setup
│   └── main.jsx           # Entry Point
└── index.html             # App Root
```

## 4. Why PHP & SQLite?
-   **PHP**: Chosen for widespread availability, ease of deployment on shared hosting (common in this region), and simple stateless request handling.
-   **SQLite**: Selected for zero-configuration, portability (single file database), and sufficient performance for this scale of prototype/MVP. No complex Docker/Postgres setup required.

## 5. Future Scalability
-   **Migration**: The `mockData.js` can be replaced by API calls to a real `teams`/`matches` table in SQLite/MySQL.
-   **Auth**: Currently "Guest Checkout". A simplified `users` table and session management can be added to PHP.
-   **Payment**: The current checkout simulates payment; Stripe or PayPal PHP SDKs can be integrated into `api/orders.php`.
