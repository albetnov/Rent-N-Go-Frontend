import { Box, Circle, MenuItem } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import RouterLink from "../RouterLink";

interface ProfileItemProps extends PropsWithChildren {
  to: string;
  color?: string;
  isActive?: boolean;
}

export default function ProfileItem({
  children,
  to,
  color = "primary",
  isActive,
}: ProfileItemProps) {
  return (
    <MenuItem bg="primary">
      <Box position="relative" px={8} py={4} w="full" bg="white" rounded={25} textAlign="center">
        <RouterLink to={to} color={color} fontSize={16} fontWeight={700}>
          {children}
        </RouterLink>
        {isActive && <Circle position="absolute" right={4} top={5} bg="red.500" p="1.5" />}
      </Box>
    </MenuItem>
  );
}
