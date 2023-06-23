import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
