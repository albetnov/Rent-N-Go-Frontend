import { Box, Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import OrderItem from './OrderItem'

export default function OrderHistory() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <Box mt={14}>
      <Menu>
        <MenuButton
          as={Button}
          bg="white"
          shadow="lg"
          rightIcon={isClicked ? <FiChevronUp /> : <FiChevronDown />}
          onClick={() => {
            setIsClicked((prev) => !prev)
          }}
        >
          Order History
        </MenuButton>
        <MenuList p="2.5">
          <OrderItem>Car</OrderItem>
          <OrderItem>Driver</OrderItem>
          <OrderItem>Tour Guide</OrderItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
