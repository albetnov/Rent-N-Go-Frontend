import { Box, Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import OrderItem from './OrderItem'

export default function OrderHistory() {
  return (
    <Box mt={14}>
      <Menu>
        {({ isOpen }) => {
          return (
            <>
              <MenuButton
                as={Button}
                bg="white"
                shadow="lg"
                rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
              >
                Order History
              </MenuButton>
              <MenuList p="2.5">
                <OrderItem>Car</OrderItem>
                <OrderItem>Driver</OrderItem>
                <OrderItem>Tour Guide</OrderItem>
              </MenuList>
            </>
          )
        }}
      </Menu>
    </Box>
  )
}
