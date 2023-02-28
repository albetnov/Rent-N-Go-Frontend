import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/auth";

export default function Guest() {
  const { loggedIn } = useAuthStore((state) => ({
    loggedIn: state.isLoggedIn,
  }));

  if (!loggedIn) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}
