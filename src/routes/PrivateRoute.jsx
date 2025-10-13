// src/routes/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // or use auth hook/context

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // allows nested routes inside layout
};

export default PrivateRoute;
