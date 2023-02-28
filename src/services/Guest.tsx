import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/auth";

export default function Guest() {
  const { loggedIn, error } = useAuthStore((state) => ({
    loggedIn: state.isLoggedIn,
    error: state.error,
  }));

  if (!loggedIn && !error) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
}
