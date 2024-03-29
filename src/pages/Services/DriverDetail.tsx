import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Container
} from '@chakra-ui/react'
import Layout from '../../components/Layout'
import OutlineCard from '../../components/Services/OutlineCard'
import RowText from '../../components/Order/RowText'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { callToast } from '../../utils/toasts'
import { type DriverData } from '../../services/apis/driver'
import CenteredText from '../../components/CenteredText'
import useOrderWizardStore from '../../stores/orderWizard'
import useCheckout from '../../hooks/useCheckout'
import {
  type CarData,
  getCars,
  type CarResponse
} from '../../services/apis/car'

import ItemContainer from '../../components/Services/ItemContainer'
import CarSelection from '../../components/Drivers/DriverCarSelection'
import FilterContainer from '../../components/Services/FilterContainer'
import SearchBar from '../../components/Searchbar'
import SeatFilter from '../../components/Cars/SeatFilter'
import PriceFilter from '../../components/Cars/PriceFilter'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

interface CarFilter {
  seats?: number
  price?: number
  search?: string
}

export default function DriverDetail() {
  const data = useLoaderData() as {
    driver: DriverData
    cars: CarResponse
  }
  const [selectedCarId, setSelectedCarId] = useState<number>()

  useEffect(() => {
    if ('ctx' in data && data.ctx === 'ERROR') {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [data])

  const refetch = async (
    page: number,
    signal?: AbortSignal,
    filter?: CarFilter
  ) => {
    const cars = await getCars({
      page,
      signal,
      price: filter ? filter.price : undefined,
      seats: filter ? filter.seats : undefined,
      search: filter ? filter.search : undefined
    })

    if (!cars) {
      callToast('failed to fetch more car data', 'error')
      return false
    }

    return cars
  }

  const {
    setter,
    data: carData,
    loading: carLoading,
    sentinel: carSentinel
  } = useInfiniteScroll<HTMLDivElement, CarData>(
    async (abortSignal, pageNumber) => {
      const result = await refetch(pageNumber, abortSignal, {})

      if (!result || result.data === null) return false

      return result
    },
    data.cars.data,
    data.cars.meta?.current_page ?? 0,
    data.cars.meta?.has_next
  )

  const onFilter = async (callback: () => Promise<CarData[] | false>) => {
    setter({ loading: true })
    const result = await callback()

    if (!result) {
      setter({ loading: false })
      return
    }

    setter({
      pageNumber: 1,
      nextPage: true,
      data: result,
      loading: false
    })
  }

  const onSearch = async (text: string) => {
    await onFilter(async () => {
      const cars = await refetch(1, undefined, { search: text.trim() })
      return cars ? cars.data : false
    })
  }

  const onSeatChange = async (seats: number) => {
    await onFilter(async () => {
      const cars = await refetch(1, undefined, { seats })
      return cars ? cars.data : false
    })
  }

  const onPriceChange = async (price: number) => {
    await onFilter(async () => {
      const cars = await refetch(1, undefined, { price })
      return cars ? cars.data : false
    })
  }

  const { orderDriver } = useOrderWizardStore((state) => ({
    orderDriver: state.orderDriver
  }))

  const { isLoading, checkout } = useCheckout(async () => {
    if (selectedCarId) {
      await orderDriver(data.driver.id, selectedCarId)
      return true
    } else {
      callToast('Pilih mas, mobilnya dipilih yaampun!')
      return false
    }
  })

  return (
    <Layout>
      {'ctx' in data && <CenteredText>Ups. Somewhing went wrong</CenteredText>}

      {!('ctx' in data) && (
        <Grid templateColumns="70% 1fr" gap={3} px={5} py={3}>
          <GridItem>
            <OutlineCard>
              <Flex overflowX="auto" gap={5} justifyContent="center">
                {data.driver.pictures.map((item) => (
                  <Image src={item.file_name} key={item.file_name} />
                ))}
              </Flex>
              <Text mt={4} fontSize={42} fontWeight="bold">
                {data.driver.name}
              </Text>

              <Text mt={5} mb={10}>
                {data.driver.desc}
              </Text>
            </OutlineCard>
          </GridItem>

          <GridItem display="flex" gap={3} flexDir="column">
            <OutlineCard>
              <Flex gap={3} alignItems="center">
                <Text fontWeight="bold" fontSize={27}>
                  Rp {data.driver.price}
                </Text>
                <Text>Per Day</Text>
              </Flex>
            </OutlineCard>
            <OutlineCard>
              <Text fontWeight="bold" fontSize={27}>
                Payment Details
              </Text>
              <Box mt={5} mb={3}>
                <Text>Driver rental fee per day</Text>
                <RowText
                  text1={data.driver.name}
                  text2={`Rp. ${data.driver.price}`}
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

          <GridItem gridColumn="span 2">
            <OutlineCard>
              <Text fontWeight="bold" fontSize={43}>
                Car List
              </Text>
              <Text
                textColor="green"
                fontWeight="bold"
                fontSize={26}
              >{`Available Cars for your personal driver: ${data.driver.name}`}</Text>

              <Container maxW="7x1">
                <FilterContainer>
                  <SearchBar onSearch={onSearch} />
                  <SeatFilter onSeatChange={onSeatChange} />
                  <PriceFilter onPriceChange={onPriceChange} />
                </FilterContainer>
                <ItemContainer>
                  {carLoading ? (
                    'Car is Loading'
                  ) : (
                    <CarSelection
                      carData={carData}
                      onCarSelect={setSelectedCarId}
                      sentinel={carSentinel}
                    />
                  )}
                </ItemContainer>
              </Container>
            </OutlineCard>
          </GridItem>
        </Grid>
      )}
    </Layout>
  )
}
