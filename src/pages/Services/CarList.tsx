import Layout from '../../components/Layout'
import SearchBar from '../../components/Searchbar'
import PriceFilter from '../../components/Cars/PriceFilter'
import SeatFilter from '../../components/Cars/SeatFilter'
import CarCardShadow from '../../components/Cars/CarCardShadow'
import FilterContainer from '../../components/Services/FilterContainer'
import ItemContainer from '../../components/Services/ItemContainer'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { type CarData } from '../../services/apis/car'
import { callToast } from '../../utils/toasts'
import CenteredText from '../../components/CenteredText'

export default function CarList() {
  const carData = useLoaderData() as CarData

  useEffect(() => {
    if ('ctx' in carData && carData.ctx === 'ERROR') {
      callToast(
        'Failed to fetch data from server. Please try again later.',
        'error'
      )
    }
  }, [carData])

  return (
    <Layout>
      <FilterContainer>
        <SearchBar />

        <SeatFilter />
        <PriceFilter />
      </FilterContainer>

      <ItemContainer>
        {Array.isArray(carData) ? (
          carData.map((item) => <CarCardShadow car={item} key={item.id} />)
        ) : (
          <CenteredText fontSize="3xl" fontWeight="bold">
            Ups. No Cars Available at the moment
          </CenteredText>
        )}
      </ItemContainer>
    </Layout>
  )
}
