import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text
} from '@chakra-ui/react'
import Layout from '../../components/Layout'
import OutlineCard from '../../components/Services/OutlineCard'
import { GiCarSeat, GiComputerFan } from 'react-icons/gi'
import { FiBriefcase } from 'react-icons/fi'
import IconCard from '../../components/Services/IconCard'
import RowText from '../../components/Order/RowText'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { callToast } from '../../utils/toasts'
import { type CarData } from '../../services/apis/car'
import CenteredText from '../../components/CenteredText'
import useOrderWizardStore from '../../stores/orderWizard'

export default function CarDetail() {
  const carData = useLoaderData() as CarData

  useEffect(() => {
    if ('ctx' in carData && carData.ctx === 'ERROR') {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [carData])

  const [isLoading, setIsLoading] = useState(false)

  const { orderCar } = useOrderWizardStore((state) => ({
    orderCar: state.orderCar
  }))

  const navigate = useNavigate()

  const checkout = async () => {
    setIsLoading(true)
    await orderCar(carData.id)
    setIsLoading(false)
    navigate('/order')
  }

  return (
    <Layout>
      {'ctx' in carData && (
        <CenteredText>Ups. Somewhing went wrong</CenteredText>
      )}

      {!('ctx' in carData) && (
        <Grid templateColumns="70% 1fr" gap={3} px={5} py={3}>
          <GridItem>
            <OutlineCard>
              <Flex overflowX="auto" gap={5} justifyContent="center">
                {carData.pictures.map((item) => (
                  <Image src={item.file_name} key={item.file_name} />
                ))}
              </Flex>
              <Text mt={4} fontSize={42} fontWeight="bold">
                {carData.name}
              </Text>
              <Text mt={2} color="green.500">
                {carData.hold_stock > 0
                  ? 'Available For Rent'
                  : 'Not Available For Rent'}
              </Text>

              <IconCard
                flexProps={{ mt: 3 }}
                Icon={GiCarSeat}
                text={carData.seats}
              />
              <IconCard Icon={FiBriefcase} text={carData.baggages} />
              <IconCard Icon={GiComputerFan} text="Air Conditioner" />

              <Text mt={5} mb={10}>
                {carData.desc}
              </Text>
            </OutlineCard>
          </GridItem>
          <GridItem display="flex" gap={3} flexDir="column">
            <OutlineCard>
              <Flex gap={3} alignItems="center">
                <Text fontWeight="bold" fontSize={27}>
                  Rp {carData.price}
                </Text>
                <Text>Per Day</Text>
              </Flex>
            </OutlineCard>
            <OutlineCard>
              <Text fontWeight="bold" fontSize={27}>
                Payment Details
              </Text>
              <Box mt={5} mb={3}>
                <Text>Car rental fee per day</Text>
                <RowText text1="Lexus LC 500" text2="Rp 1.000.000" />
              </Box>

              <Button
                mt={5}
                colorScheme="blue"
                fontWeight="bold"
                color="white"
                py={1}
                px={3}
                rounded="full"
                onClick={checkout}
                isLoading={isLoading}
              >
                Proceed to checkout
              </Button>
            </OutlineCard>
          </GridItem>
        </Grid>
      )}
    </Layout>
  )
}
