import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/apis/auth";
import { callToast, toast } from "../../utils/toasts";

interface FieldsProps {
  [index: string]: string | number;
}

const initialFields = {
  name: "",
  email: "",
  phoneNumber: "",
};
export default function RegisterModel() {
  const [fields, setFields] = useState(initialFields);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onFieldChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const result = await register({
      name: fields.name,
      email: fields.email,
      phone_number: fields.phoneNumber,
      password,
      confirm_password: confirmPassword,
    });

    if (result) {
      callToast("Registered successfully", "success");
      setFields(initialFields);
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    }
  };

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const confirmPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  return {
    name,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSubmitHandler,
    fields,
    onFieldChangeHandler,
    passwordChangeHandler,
    confirmPasswordChangeHandler,
  };
}
