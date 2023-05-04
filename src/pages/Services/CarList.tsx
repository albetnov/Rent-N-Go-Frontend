import Layout from '../../components/Layout'
import SearchBar from '../../components/Searchbar'
import PriceFilter from '../../components/Cars/PriceFilter'
import SeatFilter from '../../components/Cars/SeatFilter'
import CarCardShadow from '../../components/Cars/CarCardShadow'
import FilterContainer from '../../components/Services/FilterContainer'
import ItemContainer from '../../components/Services/ItemContainer'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { callToast } from '../../utils/toasts'
import CenteredText from '../../components/CenteredText'
import { Container, Spinner } from '@chakra-ui/react'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import {
  type CarData,
  getCars,
  type CarResponse
} from '../../services/apis/car'

interface CarFilter {
  seats?: number
  price?: number
  search?: string
}

export default function CarList() {
  const initialCarData = useLoaderData() as any

  useEffect(() => {
    if ('ctx' in initialCarData && initialCarData.ctx === 'ERROR') {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [initialCarData])

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
    data: carData,
    loading,
    sentinel,
    setter
  } = useInfiniteScroll<HTMLDivElement, CarData>(
    async (abortSignal, pageNumber) => {
      const result = await refetch(pageNumber, abortSignal, {})

      if (!result) return false
      return result
    },
    initialCarData.cars,
    initialCarData.meta.current_page,
    initialCarData.meta.has_next
  )

  const onFilter = async (callback: Promise<CarResponse | false>) => {
    setter({ loading: true })
    const result = await callback

    if (!result) {
      setter({ loading: false })
      return
    }

    setter({
      pageNumber: 1,
      nextPage: result.meta.has_next,
      data: result.data ?? [],
      loading: false
    })
  }

  const onSearch = async (text: string) => {
    await onFilter(refetch(1, undefined, { search: text.trim() }))
  }

  const onSeatChange = async (seats: number) => {
    await onFilter(refetch(1, undefined, { seats }))
  }

  const onPriceChange = async (price: number) => {
    await onFilter(refetch(1, undefined, { price }))
  }

  return (
    <Layout>
      <Container maxW="7xl">
        <FilterContainer>
          <SearchBar onSearch={onSearch} />

          <SeatFilter onSeatChange={onSeatChange} />
          <PriceFilter onPriceChange={onPriceChange} />
        </FilterContainer>

        <ItemContainer>
          {'cars' in initialCarData ? (
            <>
              {carData.map((item) => (
                <CarCardShadow car={item} key={item.id} />
              ))}
              {loading && <Spinner mx="auto" />}
              <div ref={sentinel}></div>
            </>
          ) : (
            <CenteredText fontSize="3xl" fontWeight="bold">
              Ups. No Cars Available at the moment
            </CenteredText>
          )}
        </ItemContainer>
      </Container>
    </Layout>
  )
}
