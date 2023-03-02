import { ListItem, UnorderedList } from "@chakra-ui/react";
import Profile from "./Profile";
import WhiteLink from "./WhiteLink";
import { TopbarViewProps } from "./Topbar";

export default function DesktopView({ links }: TopbarViewProps) {
  return (
    <UnorderedList display="flex" gap={14} listStyleType="none" alignItems="center">
      {links.map((link) => (
        <ListItem key={link.name}>
          <WhiteLink to={link.path}>{link.name}</WhiteLink>
        </ListItem>
      ))}
      <ListItem>
        <Profile />
      </ListItem>
    </UnorderedList>
  );
}
