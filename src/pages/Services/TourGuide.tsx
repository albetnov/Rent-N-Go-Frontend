import PriceFilter from '../../components/Cars/PriceFilter'
import Layout from '../../components/Layout'
import SearchBar from '../../components/Searchbar'
import FilterContainer from '../../components/Services/FilterContainer'
import ItemContainer from '../../components/Services/ItemContainer'
import TourCardShadow from '../../components/Tour/TourCardShadow'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'

export default function TourGuide() {
  useCustomBackground(colors.secondary)

  return (
    <Layout>
      <FilterContainer>
        <SearchBar />
        <PriceFilter />
      </FilterContainer>

      <ItemContainer my={10} gap={14} flexDir="column">
        <TourCardShadow />
        <TourCardShadow />
        <TourCardShadow />
      </ItemContainer>
    </Layout>
  )
}
