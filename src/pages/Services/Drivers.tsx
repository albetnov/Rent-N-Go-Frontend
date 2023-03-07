import Layout from '../../components/Layout'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'
import DriverMenu from '../../components/Drivers/DriversMenu'
import SearchBar from '../../components/Searchbar'
import DriverCardShadow from '../../components/Drivers/DriverCardShadow'
import FilterContainer from '../../components/Services/FilterContainer'
import ItemContainer from '../../components/Services/ItemContainer'

export default function Drivers() {
  useCustomBackground(colors.secondary)
  return (
    <Layout>
      <FilterContainer>
        <SearchBar />
        <DriverMenu />
      </FilterContainer>

      <ItemContainer>
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
        <DriverCardShadow />
      </ItemContainer>
    </Layout>
  )
}
