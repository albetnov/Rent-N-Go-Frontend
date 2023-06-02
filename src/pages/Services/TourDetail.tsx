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
import { type TourData } from '../../services/apis/tour'
import CenteredText from '../../components/CenteredText'
import useOrderWizardStore from '../../stores/orderWizard'
import useCheckout from '../../hooks/useCheckout'

export default function TourDetail() {
  const tourData = useLoaderData() as TourData

  useEffect(() => {
    if ('ctx' in tourData && tourData.ctx === 'ERROR') {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [tourData])

  const { orderTour } = useOrderWizardStore((state) => ({
    orderTour: state.orderTour
  }))

  const { isLoading, checkout } = useCheckout(async () => {
    await orderTour(tourData.id)
    return true
  })

  return (
    <Layout>
      {'ctx' in tourData && (
        <CenteredText>Ups. Somewhing went wrong</CenteredText>
      )}

      {!('ctx' in tourData) && (
        <Grid templateColumns="70% 1fr" gap={3} px={5} py={3}>
          <GridItem>
            <OutlineCard>
              <Flex overflowX="auto" gap={5} justifyContent="center">
                {tourData.pictures.map((item) => (
                  <Image src={item.file_name} key={item.file_name} />
                ))}
              </Flex>
              <Text mt={4} fontSize={42} fontWeight="bold">
                {tourData.name}
              </Text>
              <Text mt={5} mb={10}>
                {tourData.desc}
              </Text>
            </OutlineCard>
          </GridItem>
          <GridItem display="flex" gap={3} flexDir="column">
            <OutlineCard>
              <Flex gap={3} alignItems="center">
                <Text fontWeight="bold" fontSize={27}>
                  Rp {tourData.price}
                </Text>
                <Text>Per Day</Text>
              </Flex>
            </OutlineCard>
            <OutlineCard>
              <Text fontWeight="bold" fontSize={27}>
                Payment Details
              </Text>
              <Box mt={5} mb={3}>
                <Text>Tour rental fee per day</Text>
                <RowText
                  text1={tourData.name}
                  text2={`Rp. ${tourData.price}`}
                />
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
