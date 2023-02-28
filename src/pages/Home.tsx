import { Flex } from "@chakra-ui/react";
import RouterLink from "../components/RouterLink";

export default function Home() {
  return (
    <main>
      <Flex gap={3}>
        <RouterLink to="/auth/login">Login</RouterLink>
        <RouterLink to="/auth/register">Register</RouterLink>
        <RouterLink to="/logout">Logout</RouterLink>
      </Flex>
    </main>
  );
}
