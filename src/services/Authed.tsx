import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/auth";

export default function Authed() {
  const { loggedIn } = useAuthStore((state) => ({ loggedIn: state.isLoggedIn }));

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/auth/login");
    }
  }, [loggedIn]);

  if (loggedIn) {
    return <Outlet />;
  }
}
