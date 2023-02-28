import { Button, Text } from "@chakra-ui/react";
import AuthScaffold from "../../components/Auth/AuthScaffold";
import OutlineInput from "../../components/Auth/OutlineInput";
import PasswordInput from "../../components/Auth/PasswordInput";
import CenteredText from "../../components/CenteredText";
import PrimaryButton from "../../components/PrimaryButton";
import RouterLink from "../../components/RouterLink";
import useCustomBackground from "../../hooks/useCustomBackground";
import colors from "../../utils/colors";

export default function Login() {
  useCustomBackground(colors.primary);

  return (
    <AuthScaffold
      title="Log In"
      message={{ first: "Welcome Back!", second: "Please enter your credentials" }}
    >
      <OutlineInput type="email" placeholder="Enter your email" label="Email" />
      <PasswordInput />
      <PrimaryButton w="full">Login</PrimaryButton>
      <CenteredText mt={5}>
        Don&lsquo;t have an account?{" "}
        <RouterLink fontWeight="semibold" to="/auth/register">
          Register
        </RouterLink>
      </CenteredText>
    </AuthScaffold>
  );
}
