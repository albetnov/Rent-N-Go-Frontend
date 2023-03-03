import { Box, Button, Flex, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import CarCard from '../../Cars/CarCard'
import DriverCard from '../../Drivers/DriverCard'
import { type DriverFeatureProps } from '../../Drivers/DriverFeatures'
import OrderItem from './OrderItem'

const DRIVER_FEATURE: DriverFeatureProps = {
  isPhotoChecked: false,
  isIdCardChecked: true,
  isDriverLicenseChecked: true,
  isSocialMediaChecked: false
}

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
      <Flex mt={14} gap={8} flexDir="column" justifyContent="center">
        <CarCard
          baggages={2}
          imgUrl="https://source.unsplash.com/1000x1000?car"
          name="Toyota Avanza"
          seats={4}
          stock={3}
        />
        <DriverCard
          imgUrl="https://source.unsplash.com/1000x1000?potrait"
          name="Delvin Jason"
          stars={3}
          features={DRIVER_FEATURE}
        />
      </Flex>
    </Box>
  )
}
