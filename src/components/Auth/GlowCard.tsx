import { Card, CardProps } from "@chakra-ui/react";

export default function GlowCard(props: CardProps) {
  return <Card {...props} boxShadow="8px 8px 33px #A5ABAD" />;
}
