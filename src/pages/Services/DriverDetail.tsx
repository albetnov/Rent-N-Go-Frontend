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
import RowText from '../../components/Order/RowText'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { callToast } from '../../utils/toasts'
import { type DriverData } from '../../services/apis/driver'
import { type CarData } from '../../services/apis/car'
import CenteredText from '../../components/CenteredText'
import useOrderWizardStore from '../../stores/orderWizard'
import useCheckout from '../../hooks/useCheckout'

export default function DriverDetail() {
  const driverData = useLoaderData() as DriverData
  const carData = useLoaderData() as CarData

  useEffect(() => {
    if ('ctx' in driverData && driverData.ctx === 'ERROR') {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [driverData])

  const { orderDriver } = useOrderWizardStore((state) => ({
    orderDriver: state.orderDriver
  }))

  const { isLoading, checkout } = useCheckout(async () => {
    await orderDriver(driverData.id, carData.id)
  })

  return (
    <Layout>
      {'ctx' in driverData && (
        <CenteredText>Ups. Somewhing went wrong</CenteredText>
      )}

      {!('ctx' in driverData) && (
        <Grid templateColumns="70% 1fr" gap={3} px={5} py={3}>
          <GridItem>
            <OutlineCard>
              <Flex overflowX="auto" gap={5} justifyContent="center">
                {driverData.pictures.map((item) => (
                  <Image src={item.file_name} key={item.file_name} />
                ))}
              </Flex>
              <Text mt={4} fontSize={42} fontWeight="bold">
                {driverData.name}
              </Text>

              <Text mt={5} mb={10}>
                {driverData.desc}
              </Text>
            </OutlineCard>
          </GridItem>
          <GridItem display="flex" gap={3} flexDir="column">
            <OutlineCard>
              <Flex gap={3} alignItems="center">
                <Text fontWeight="bold" fontSize={27}>
                  Rp {driverData.price}
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
