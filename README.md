# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Super Admin Frontend

This project is a React-based frontend for the Super Admin dashboard of an e-school platform. It uses Vite for fast development and build, and follows a modular folder structure for scalability and maintainability.

## Folder Structure & What Each Folder Does

```
.
├── public/                # Static assets served directly (e.g., images, icons)
│   └── vite.svg           # Example static asset
├── src/                   # Source code
│   ├── api/               # API configuration and service calls
│   │   ├── apiConfig.js   # Axios/fetch config for API base URL, interceptors, etc.
│   │   └── auth.js        # Authentication-related API calls
│   ├── assets/            # Images, SVGs, and other static assets used in the app
│   │   ├── login.png
│   │   └── react.svg
│   ├── components/        # Reusable UI components
│   │   ├── Button/        # Button component
│   │   │   └── Button.jsx
│   │   ├── Dropdown/      # Dropdown component
│   │   │   └── Dropdown.jsx
│   │   ├── Header/        # Header component
│   │   │   └── Header.jsx
│   │   ├── Input/         # Input component
│   │   │   └── Input.jsx
│   │   ├── Sidebar/       # Sidebar navigation
│   │   │   └── Sidebar.jsx
│   │   └── Table/         # Table component
│   │       └── Table.jsx
│   ├── hooks/             # Custom React hooks (shared logic)
│   │   └── useLogin.js
│   ├── Layouts/           # Layout components (e.g., Dashboard layout)
│   │   └── DashboardLayout.jsx
│   ├── pages/             # Page components (routed views)
│   │   ├── Dashboard/     # Dashboard page
│   │   │   └── Dashboard.jsx
│   │   ├── Login/         # Login page
│   │   │   └── Login.jsx
│   │   └── School/        # School management pages
│   │       ├── AddSchool.jsx
│   │       ├── EditSchool.jsx
│   │       └── School.jsx
│   ├── routes/            # Route definitions and guards
│   │   ├── AppRoutes.jsx     # Main route configuration
│   │   ├── PrivateRoute.jsx  # Authenticated route guard
│   │   └── PublicRoute.jsx   # Public route guard
│   ├── App.css            # Global styles
│   ├── App.jsx            # Root React component
│   ├── index.css          # Base CSS
│   └── main.jsx           # Entry point
├── .eslintrc.js           # ESLint configuration
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
├── vite.config.js         # Vite configuration
```

### Folder & File Explanations
- **public/**: Static files served as-is. Place images, icons, and static assets here.
- **src/api/**: All API configuration and service calls. Centralizes API logic and authentication.
- **src/assets/**: Images, SVGs, and other static assets used within the React app.
- **src/components/**: Reusable UI components, each in its own folder for modularity.
- **src/hooks/**: Custom React hooks for shared logic (e.g., authentication, data fetching).
- **src/Layouts/**: Layout components that wrap pages (e.g., dashboard layout with sidebar/header).
- **src/pages/**: Page-level components, each route/view in its own folder.
- **src/routes/**: Route definitions and guards (e.g., private/public route logic).
- **App.jsx**: Root React component.
- **main.jsx**: Entry point for the React app.
- **App.css, index.css**: Global and base styles.
- **index.html**: Main HTML file loaded by Vite.
- **package.json**: Project metadata, scripts, and dependencies.
- **vite.config.js**: Vite configuration for build and dev server.
- **.eslintrc.js**: ESLint configuration for code linting.

## Key Concepts
- **Modular Components:** Each UI element is a reusable component, organized by type.
- **Pages:** Each route/view has its own folder under `pages/`.
- **API Layer:** All API calls and configs are centralized in `src/api/`.
- **Custom Hooks:** Shared logic is abstracted into hooks in `src/hooks/`.
- **Layouts:** Layouts for different sections/pages are in `src/Layouts/`.
- **Routing:** All route logic is in `src/routes/`.

## Getting Started
1. Install dependencies:
	```sh
	npm install
	```
2. Start the development server:
	```sh
	npm run dev
	```
3. Build for production:
	```sh
	npm run build
	```

---

For more details, see the comments in each file and folder.
