# 📂 Ticket Management System - File Structure Explanation

This document explains the function of each key file and directory in the repository to help you present the project structure.

## 📌 Project Root

These files exist at the top level of the project.

- **`README.md`**: The main landing page for the project documentation. It explains what the project is, its key features (Frontend & Backend), the tech stack, and how to install/run it.
- **`package.json`**: The heart of the JavaScript/React project. It lists all installed libraries (dependencies) like React, Tailwind CSS, and scripts to run the project (`npm run dev`).
- **`vite.config.js`**: Configuration for **Vite**, the build tool used to serve the React application significantly faster than traditional tools.
- **`tailwind.config.js`**: Configuration for **Tailwind CSS**. It defines the custom theme, colors, and fonts used throughout the application.
- **`postcss.config.js`**: A configuration file for PostCSS, which processes CSS and is required for Tailwind CSS to work.
- **`index.html`**: The main entry HTML file. It is the shell where the React application is "mounted" and displayed to the user.

---

## 🎨 `src/` (Frontend - React)

This directory contains all the visual code and logic for the user interface.

- **`main.jsx`**: The entry point of the React application. It finds the "root" element in `index.html` and renders the entire App inside it.
- **`App.jsx`**: The main container component. It handles the **Routing** (navigation between pages like Home, Checkout, Admin) and sets up global providers (like the Cart context).
- **`index.css`**: The global CSS file. It imports Tailwind's base styles and any custom global font settings.

### 📂 `src/pages/`

Contains the individual views (screens) of the application.

- **`Home.jsx`**: The landing page of the website.
- **`Matches.jsx`**: Displays the list of available football matches.
- **`MatchDetails.jsx`**: Shows specific details for a single match when clicked.
- **`Checkout.jsx`**: The page where users review their order and pay.
- **`Admin.jsx`**: The restricted dashboard for administrators to view orders and manage the system.
- **`Stadiums.jsx`**: Information about the venues.
- **`Teams.jsx`**: Information about the participating teams.

### 📂 `src/components/`

Reusable UI building blocks used across multiple pages.

- _(Examples likely include: `Navbar`, `Footer`, `MatchCard`, `Button`)_. These help keep the code clean and modular.

### 📂 `src/data/`

- Contains static data files (likely `.json` or `.js` arrays) to simulate a database for the frontend before the backend is connected.

### 📂 `src/context/`

- **`CartContext.jsx`**: Manages the global state of the user's shopping cart (selected tickets) so selections persist as they navigate different pages.

---

## 🔌 `api/` (Backend - PHP)

This folder contains the server-side logic powered by PHP.

- **`orders.php`**: The main API endpoint.
  - **GET**: Fetches the list of all orders (for the Admin panel).
  - **POST**: Receives new order data from the specific checkout form and saves it to the database.
  - **DELETE**: Allows admins to remove an order.
  - Checks if users are blocked before allowing a purchase.
- **`db.php`**: A helper file that manages the connection to the SQLite database. It is included in other scripts so they can talk to the database.
- **`blocked_users.php`**: Handles the logic for banning/unbanning users (Admin security feature)

---

## 🛠️ `server/` (Backend - Node.js)

An alternative backend implementation using Node.js/Express.

- **`index.cjs`**: An **Express.js** server file. It performs similar functions to the PHP API (handling orders, connecting to SQLite) but written in JavaScript.
- **`orders.db`**: The **SQLite Database** file. This single file stores all the application's data (orders, users, etc.). It is "serverless" and portable.

---

## 📦 `public/`

- Contains static public assets that don't need processing, like images, logos, and the browser tab icon (favicon).
