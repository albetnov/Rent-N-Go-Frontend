import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";
import { callToast } from "../../utils/toasts";

export default function Logout() {
  const { logout } = useAuthStore((state) => ({ logout: state.logout }));

  const navigate = useNavigate();

  setTimeout(() => {
    callToast("Logged out");
  }, 1000);

  useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return <></>;
}
