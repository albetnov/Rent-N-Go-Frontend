import { CardBody, CardHeader } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import GlowCard from "../../components/Auth/GlowCard";
import CenteredGrid from "../../components/CenteredGrid";
import CenteredText from "../../components/CenteredText";
import Title from "../../components/Title";
import useCustomBackground from "../../hooks/useCustomBackground";
import colors from "../../utils/colors";

interface AuthScaffoldProps extends PropsWithChildren {
  title: string;
  message?: {
    first: string;
    second: string;
  };
}

export default function AuthScaffold({ title, message, children }: AuthScaffoldProps) {
  useCustomBackground(colors.primary);

  return (
    <CenteredGrid px={13} py={{ base: 0, xl: 14 }}>
      <Title title={title} />
      <GlowCard
        rounded={30}
        py={{ base: 7, xl: 32 }}
        h={{ base: "fit-content", xl: "full" }}
        px={{ base: 6, xl: 14 }}
      >
        <CardHeader>
          <CenteredText mb="10" color="primary" fontSize={55} fontWeight={700}>
            {title}
          </CenteredText>
          {message && (
            <>
              <CenteredText>{message.first}</CenteredText>
              <CenteredText>{message.second}</CenteredText>
            </>
          )}
        </CardHeader>
        <CardBody>{children}</CardBody>
      </GlowCard>
    </CenteredGrid>
  );
}
