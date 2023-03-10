import { MenuItem, type MenuItemProps } from '@chakra-ui/react'
import CenteredText from '../../CenteredText'

export default function OrderItem({ children, ...props }: MenuItemProps) {
  return (
    <MenuItem
      {...props}
      bg="gray.50"
      w="full"
      rounded="full"
      shadow="lg"
      py={2}
      my="5"
    >
      <CenteredText w="full" fontWeight={400}>
        {children}
      </CenteredText>
    </MenuItem>
  )
}
