import { PropsWithChildren } from "react";
import RouterLink from "../RouterLink";

interface WhiteLinkProps extends PropsWithChildren {
  to: string;
}

export default function WhiteLink({ children, to }: WhiteLinkProps) {
  return (
    <RouterLink to={to} color="white">
      {children}
    </RouterLink>
  );
}
