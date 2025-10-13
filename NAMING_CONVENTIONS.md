# Variable and Naming Conventions

This project follows consistent naming conventions to ensure code readability and maintainability.

## General Principles
- Use **camelCase** for variables, functions, and object properties.
- Use **PascalCase** for React components, classes, and file/folder names for components/pages.
- Use **UPPER_SNAKE_CASE** for constants.
- Use descriptive and meaningful names.
- Avoid abbreviations unless they are well-known (e.g., `id`, `API`).

## Examples

### Variables & Functions
```js
let userName = 'John';
function fetchUserData() { ... }
```

### React Components & Files
```js
// File: src/components/Button/Button.jsx
function Button(props) { ... }

// File: src/pages/Login/Login.jsx
function Login() { ... }
```

### Constants
```js
const API_BASE_URL = 'https://api.example.com';
```

### Folders
- Component, page, and layout folders use **PascalCase** (e.g., `Button`, `DashboardLayout`).
- Utility and hook folders use **camelCase** (e.g., `hooks`, `api`).

## Do's and Don'ts
- ✅ `userList`, `handleSubmit`, `DashboardLayout`
- ❌ `user_list`, `Handle_Submit`, `dashboardlayout`

## File Naming
- Component files: `ComponentName.jsx`
- Page files: `PageName.jsx`
- Hook files: `useHookName.js`
- Utility files: `utilityName.js`

---

Following these conventions helps keep the codebase clean and easy to navigate for all contributors.
