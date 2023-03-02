import { Flex, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle, Text } from "@chakra-ui/react";
import ProfileItem from "./ProfileItem";

export default function Profile() {
  return (
    <Menu offset={[100, 10]}>
      <MenuButton>
        <SkeletonCircle w={14} h={14} />
      </MenuButton>
      <MenuList p={4} border="none" bg="primary" shadow="xl">
        <ProfileItem isActive to="/profile">
          My Profile
        </ProfileItem>
        <ProfileItem to="/order">Order On Process</ProfileItem>
        <ProfileItem to="/logout" color="red.500">
          Logout
        </ProfileItem>
      </MenuList>
    </Menu>
  );
}
