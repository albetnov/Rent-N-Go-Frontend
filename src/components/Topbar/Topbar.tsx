import { Flex, Link } from "@chakra-ui/react";
import Logo from "./Logo";
import WhiteLink from "./WhiteLink";

export default function Topbar() {
  return (
    <Flex justifyContent="space-around" bg="primary" px={5} py={7} alignItems="center">
      <Logo />
      <Flex gap={7}>
        <WhiteLink to="/">Home</WhiteLink>
        <Link href="#services" color="white">
          Our Services
        </Link>
        <WhiteLink to="/">Rental Policies</WhiteLink>
        <WhiteLink to="/">Contacts</WhiteLink>
        <WhiteLink to="/">About</WhiteLink>
        <WhiteLink to="/auth/login">Login</WhiteLink>
        <WhiteLink to="/auth/register">Register</WhiteLink>
      </Flex>
    </Flex>
  );
}
