import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomBackground from "../../hooks/useCustomBackground";
import useAuthStore from "../../stores/auth";
import colors from "../../utils/colors";
import { callToast } from "../../utils/toasts";

export default function LoginModel() {
  useCustomBackground(colors.primary);

  const { login } = useAuthStore((state) => ({
    login: state.login,
  }));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const navigate = useNavigate();

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const check = await login(email, password);

    if (check) {
      callToast("Logged In Successfully");
      navigate("/");
    } else {
      callToast("Invalid Credentials");
      navigate("/auth/login");
    }
  };

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmitHandler,
  };
}
