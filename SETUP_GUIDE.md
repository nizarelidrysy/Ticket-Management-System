# Setup Guide: Ticket.ma

## Prerequisites
-   **Node.js** (v18+ recommended)
-   **PHP** (v8.0+) with `sqlite3` and `pdo_sqlite` extensions enabled.

## 1. Installation

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Verify assets**:
    Ensure the `public/assets` folder contains the necessary logos:
    -   `websiteLogo.png`
    -   `FRMFLogo.svg`
    -   `DoclbyDigital.svg`
    -   `marocTelecomLogo.svg`

## 2. Running the Backend

The project uses a PHP backend with an SQLite database. You can run the built-in PHP server for development.

1.  Open a new terminal.
2.  Navigate to the project root.
3.  Run the PHP server on port 8000:
    ```bash
    php -S localhost:8000 -t .
    ```
    *Note: The `-t .` flag serves files from the current directory, allowing access to `api/` scripts.*

## 3. Running the Frontend

The frontend is a React app powered by Vite.

1.  Open another terminal.
2.  Navigate to the project root.
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the link provided (usually `http://localhost:5173`).

## 4. Database Setup

The database file is located at `server/orders.db`.
-   It is automatically created if it doesn't exist when `api/db.php` is accessed.
-   The schema includes `orders` and `blocked_users` tables.

## 5. Troubleshooting Logic

-   **Images not loading**: Check `src/data/mockData.js` URLs. Some public URLs might expire or block hotlinking.
-   **API Errors**: specific PHP errors can be seen in the terminal running `php -S`. Ensure `server/` directory is writable for SQLite file creation.
-   **CORS**: `api/config.php` (or headers in individual files) handles CORS to allow `localhost:5173` to talk to `localhost:8000`.

## 6. Deployment (Brief)

To deploy to a standard LAMP/LEMP stack:
1.  Build the React app: `npm run build`.
2.  Upload the `dist/` folder contents to your `public_html`.
3.  Upload the `api/` folder to the same directory.
4.  Ensure `server/` is uploaded and writable by the web server user (e.g., `www-data`).
5.  Update any `fetch` URLs in the frontend code to point to the production domain (or use relative paths `/api/...`).

## 7. Viewing the Database

To inspect the SQLite database (`server/orders.db`) directly:
1.  **VS Code Extension**: Install the "SQLite Viewer" extension in VS Code. Click on the `.db` file to browse tables.
2.  **CLI**: Run `sqlite3 server/orders.db` in your terminal.
    -   `SELECT * FROM orders;` to see orders.
    -   `SELECT * FROM blocked_users;` to see blocked users.
    -   `.exit` to quit.
3.  **GUI Tools**: Use **DB Browser for SQLite** (free desktop app) to open the file.
