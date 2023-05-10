import Layout from '../../components/Layout'
import SearchBar from '../../components/Searchbar'
import PriceFilter from '../../components/Tour/PriceFilter'
import TourCardShadow from '../../components/Tour/TourCardShadow'
import FilterContainer from '../../components/Services/FilterContainer'
import ItemContainer from '../../components/Services/ItemContainer'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { callToast } from '../../utils/toasts'
import CenteredText from '../../components/CenteredText'
import { Container, Spinner } from '@chakra-ui/react'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import {
  type TourData,
  getTours,
  type TourResponse
} from '../../services/apis/tour'

interface TourFilter {
  price?: number
  search?: string
}

export default function TourList() {
  const initialTourData = useLoaderData() as any

  console.log('initialTourData:', initialTourData)

  useEffect(() => {
    if (
      initialTourData &&
      'ctx' in initialTourData &&
      initialTourData.ctx === 'ERROR'
    ) {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [initialTourData])

  const refetch = async (
    page: number,
    signal?: AbortSignal,
    filter?: TourFilter
  ) => {
    const tours = await getTours({
      page,
      signal,
      price: filter ? filter.price : undefined,
      search: filter ? filter.search : undefined
    })

    if (!tours) {
      callToast('failed to fetch more tour data', 'error')
      return false
    }

    return tours
  }

  const {
    data: tourData,
    loading,
    sentinel,
    setter
  } = useInfiniteScroll<HTMLDivElement, TourData>(
    async (abortSignal, pageNumber) => {
      const result = await refetch(pageNumber, abortSignal, {})

      if (!result) return false
      return result
    },
    initialTourData?.tours,
    initialTourData?.meta?.current_page ?? 0,
    initialTourData?.meta?.has_next
  )

  const onFilter = async (callback: Promise<TourResponse | false>) => {
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
          {initialTourData && 'tours' in initialTourData ? (
            <>
              {tourData.map((item) => (
                <TourCardShadow tour={item} key={item.id} />
              ))}
              {loading && <Spinner mx="auto" />}
              <div ref={sentinel}></div>
            </>
          ) : (
            <CenteredText fontSize="3xl" fontWeight="bold">
              Ups. No Tours Available at the moment
            </CenteredText>
          )}
        </ItemContainer>
      </Container>
    </Layout>
  )
}
