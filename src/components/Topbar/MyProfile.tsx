import { Menu, MenuButton, MenuList, SkeletonCircle } from '@chakra-ui/react'
import useOrderWizardStore from '../../stores/orderWizard'
import ProfileItem from './ProfileItem'

export default function MyProfile() {
  const { hasOrder } = useOrderWizardStore((state) => ({
    hasOrder: state.hasOrder
  }))

  return (
    <Menu offset={hasOrder ? [100, 10] : undefined}>
      <MenuButton>
        <SkeletonCircle w={14} h={14} />
      </MenuButton>
      <MenuList zIndex={10} p={4} border="none" bg="primary" shadow="xl">
        <ProfileItem isActive to="/profile">
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
