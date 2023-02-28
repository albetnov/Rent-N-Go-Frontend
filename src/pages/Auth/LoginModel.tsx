import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomBackground from "../../hooks/useCustomBackground";
import useAuthStore from "../../stores/auth";
import colors from "../../utils/colors";
import { callToast } from "../../utils/toasts";

export default function LoginModel() {
  useCustomBackground(colors.primary);

  const { login, error, clear } = useAuthStore((state) => ({
    login: state.login,
    error: state.error,
    clear: state.clear,
  }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const navigate = useNavigate();

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    console.log(error);
    if (error) {
      callToast(error, "error");
      clear();
      navigate("/auth/login");
    } else if (error === false) {
      callToast("You're logged in!", "success");
      clear();
      navigate("/");
    }
  }, [error, navigate]);

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmitHandler,
  };
}
