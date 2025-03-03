import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const GuestRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return !user ? <Outlet /> : <Navigate to="/main-dashboard" />;
};
