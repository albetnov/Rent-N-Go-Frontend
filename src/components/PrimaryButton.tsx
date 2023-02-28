import { Button, ButtonProps } from "@chakra-ui/react";

export default function PrimaryButton(props: ButtonProps) {
  return <Button {...props} bg="btn-primary" color="white" _hover={{ bg: "primary" }} />;
}
