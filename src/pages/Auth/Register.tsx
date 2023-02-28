import AuthScaffold from "../../components/Auth/AuthScaffold";
import OutlineInput from "../../components/Auth/OutlineInput";
import PasswordInput from "../../components/Auth/PasswordInput";
import CenteredText from "../../components/CenteredText";
import PrimaryButton from "../../components/PrimaryButton";
import RouterLink from "../../components/RouterLink";
import RegisterModel from "./RegisterModel";

export default function Register() {
  const registerModel = RegisterModel();

  return (
    <AuthScaffold title="Register">
      <form onSubmit={registerModel.onSubmitHandler}>
        <OutlineInput
          InputProps={{
            onChange: registerModel.onFieldChangeHandler,
            name: "name",
            value: registerModel.fields.name,
          }}
          label="Name"
          placeholder="Enter your name"
        />
        <OutlineInput
          InputProps={{
            onChange: registerModel.onFieldChangeHandler,
            name: "email",
            value: registerModel.fields.email,
          }}
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <OutlineInput
          InputProps={{
            onChange: registerModel.onFieldChangeHandler,
            name: "phoneNumber",
            value: registerModel.fields.phoneNumber,
          }}
          type="number"
          label="Phone Number"
          placeholder="Enter your phone number"
        />
        <PasswordInput
          InputProps={{
            onChange: registerModel.passwordChangeHandler,
            name: "password",
            value: registerModel.password,
          }}
        />
        <PasswordInput
          InputProps={{
            onChange: registerModel.confirmPasswordChangeHandler,
            name: "confirmPassword",
            value: registerModel.confirmPassword,
          }}
          title="Confirm Password"
        />
        <PrimaryButton w="full" type="submit">
          Register
        </PrimaryButton>
      </form>
      <CenteredText mt={5}>
        Already have an account?{" "}
        <RouterLink fontWeight="semibold" to="/auth/login">
          Login
        </RouterLink>
      </CenteredText>
    </AuthScaffold>
  );
}
