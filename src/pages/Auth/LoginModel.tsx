import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomBackground from "../../hooks/useCustomBackground";
import { login } from "../../services/apis/auth";
import colors from "../../utils/colors";
import { callToast } from "../../utils/toasts";

export default function LoginModel() {
  useCustomBackground(colors.primary);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const navigate = useNavigate();

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const result = await login({ email, password });

    if (result === 404) {
      return callToast("Credentials not found", "error");
    }

    if (result) {
      const payload = {
        accessToken: result.token,
        accessTokenExpr: result.token_expired_at,
        refreshToken: result.refresh_token,
        refreshTokenExpr: result.refresh_token_expired_at,
      };

      console.log(payload);

      // tell zustand to login

      callToast("Logged in successfully");
      navigate("/");
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
