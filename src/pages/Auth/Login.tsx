import { Button, CardBody, CardHeader, Text } from "@chakra-ui/react";
import GlowCard from "../../components/Auth/GlowCard";
import OutlineInput from "../../components/Auth/OutlineInput";
import PasswordInput from "../../components/Auth/PasswordInput";
import CenteredGrid from "../../components/CenteredGrid";
import CenteredText from "../../components/CenteredText";
import RouterLink from "../../components/RouterLink";
import Title from "../../components/Title";
import useCustomBackground from "../../hooks/useCustomBackground";
import colors from "../../utils/colors";

export default function Login() {
  useCustomBackground(colors.primary);

  return (
    <CenteredGrid px={13} py={{ base: 0, xl: 14 }}>
      <Title title="Login" />
      <GlowCard
        rounded={30}
        py={{ base: 7, xl: 32 }}
        h={{ base: "fit-content", xl: "full" }}
        px={{ base: 6, xl: 14 }}
      >
        <CardHeader>
          <CenteredText mb="10" color="primary" fontSize={55} fontWeight={700}>
            Log In
          </CenteredText>
          <CenteredText>Welcome Back!</CenteredText>
          <CenteredText>Please enter your credentials</CenteredText>
        </CardHeader>
        <CardBody>
          <OutlineInput type="email" placeholder="Enter your email" label="Email" />
          <PasswordInput />
          <Button bg="btn-primary" color="white" w="full">
            Login
          </Button>
          <Text textAlign="center" mt={5}>
            Don&lsquo;t have an account?{" "}
            <RouterLink fontWeight="semibold" to="/auth/register">
              Register
            </RouterLink>
          </Text>
        </CardBody>
      </GlowCard>
    </CenteredGrid>
  );
}
