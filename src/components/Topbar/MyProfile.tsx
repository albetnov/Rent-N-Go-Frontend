import {
  Image,
  Menu,
  MenuButton,
  MenuList,
  SkeletonCircle
} from '@chakra-ui/react'
import MyProfileModel from './MyProfileModel'
import ProfileItem from './ProfileItem'

export default function MyProfile() {
  const { hasOrder, photo, isComplete } = MyProfileModel()

  return (
    <Menu offset={hasOrder ? [100, 10] : undefined}>
      <MenuButton>
        {photo ? (
          <Image src={photo} rounded="full" w={14} h={14} objectFit="cover" />
        ) : (
          <SkeletonCircle w={14} h={14} />
        )}
      </MenuButton>
      <MenuList zIndex={10} p={4} border="none" bg="primary" shadow="xl">
        <ProfileItem isActive={isComplete} to="/profile">
          My Profile
        </ProfileItem>
        {hasOrder && <ProfileItem to="/order">Order On Process</ProfileItem>}
        <ProfileItem to="/logout" color="red.500">
          Logout
        </ProfileItem>
      </MenuList>
    </Menu>
  )
}
