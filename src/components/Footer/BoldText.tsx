import { Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function BoldText({ children }: PropsWithChildren) {
  return (
    <Text as="span" fontWeight={700}>
      {children}
    </Text>
  );
}
