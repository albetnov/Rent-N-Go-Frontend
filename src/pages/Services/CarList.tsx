import Layout from '../../components/Layout'
import SearchBar from '../../components/Searchbar'
import BrandFilter from '../../components/Cars/BrandFilter'
import PriceFilter from '../../components/Cars/PriceFilter'
import SeatFilter from '../../components/Cars/SeatFilter'
import CarCardShadow from '../../components/Cars/CarCardShadow'
import FilterContainer from '../../components/Services/FilterContainer'
import ItemContainer from '../../components/Services/ItemContainer'

export default function CarList() {
  return (
    <Layout>
      <FilterContainer>
        <SearchBar />

        <BrandFilter />
        <SeatFilter />
        <PriceFilter />
      </FilterContainer>

      <ItemContainer>
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
        <CarCardShadow />
      </ItemContainer>
    </Layout>
  )
}
