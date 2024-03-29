import Layout from '../../components/Layout'
import SearchBar from '../../components/Searchbar'
import PriceFilter from '../../components/Drivers/PriceFilter'
import DriverCardShadow from '../../components/Drivers/DriverCardShadow'
import FilterContainer from '../../components/Services/FilterContainer'
import ItemContainer from '../../components/Services/ItemContainer'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { callToast } from '../../utils/toasts'
import CenteredText from '../../components/CenteredText'
import { Container, Spinner } from '@chakra-ui/react'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import {
  type DriverData,
  getDrivers,
  type DriverResponse
} from '../../services/apis/driver'

interface DriverFilter {
  price?: number
  search?: string
}

export default function DriverList() {
  const initialDriverData = useLoaderData() as any

  useEffect(() => {
    if ('ctx' in initialDriverData && initialDriverData.ctx === 'ERROR') {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [initialDriverData])

  const refetch = async (
    page: number,
    signal?: AbortSignal,
    filter?: DriverFilter
  ) => {
    const drivers = await getDrivers({
      page,
      signal,
      price: filter ? filter.price : undefined,
      search: filter ? filter.search : undefined
    })

    if (!drivers) {
      callToast('failed to fetch more drivers data', 'error')
      return false
    }

    return drivers
  }

  const {
    data: driverData,
    loading,
    sentinel,
    setter
  } = useInfiniteScroll<HTMLDivElement, DriverData>(
    async (abortSignal, pageNumber) => {
      const result = await refetch(pageNumber, abortSignal, {})

      if (!result) return false
      return result
    },
    initialDriverData?.drivers,
    initialDriverData.meta?.current_page ?? 0,
    initialDriverData.meta?.has_next
  )

  const onFilter = async (callback: Promise<DriverResponse | false>) => {
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

  const onPriceChange = async (price: number) => {
    await onFilter(refetch(1, undefined, { price }))
  }

  return (
    <Layout>
      <Container maxW="7xl">
        <FilterContainer>
          <SearchBar onSearch={onSearch} />
          <PriceFilter onPriceChange={onPriceChange} />
        </FilterContainer>

        <ItemContainer>
          {'drivers' in initialDriverData ? (
            <>
              {driverData.map((item) => (
                <DriverCardShadow driver={item} key={item.id} />
              ))}
              {loading && <Spinner mx="auto" />}
              <div ref={sentinel}></div>
            </>
          ) : (
            <CenteredText fontSize="3xl" fontWeight="bold">
              Ups. No Drivers Available at the moment
            </CenteredText>
          )}
        </ItemContainer>
      </Container>
    </Layout>
  )
}
