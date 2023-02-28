import { Button } from "@chakra-ui/react";
import AuthScaffold from "../../components/Auth/AuthScaffold";
import OutlineInput from "../../components/Auth/OutlineInput";
import PasswordInput from "../../components/Auth/PasswordInput";
import CenteredText from "../../components/CenteredText";
import PrimaryButton from "../../components/PrimaryButton";
import RouterLink from "../../components/RouterLink";

export default function Register() {
  return (
    <AuthScaffold title="Register">
      <OutlineInput label="Name" placeholder="Enter your name" />
      <OutlineInput type="email" label="Email" placeholder="Enter your email" />
      <OutlineInput type="number" label="Phone Number" placeholder="Enter your phone number" />
      <PasswordInput />
      <PasswordInput title="Confirm Password" />
      <PrimaryButton w="full">Register</PrimaryButton>
      <CenteredText mt={5}>
        Already have an account?{" "}
        <RouterLink fontWeight="semibold" to="/auth/login">
          Login
        </RouterLink>
      </CenteredText>
    </AuthScaffold>
  );
}
