import Layout from '../../components/Layout'
import CarCard from '../../components/Cars/CarCard'
import { Box, Flex } from '@chakra-ui/react'
import SearchBar from '../../components/Searchbar'
import BrandFilter from '../../components/Cars/BrandFilter'
import PriceFilter from '../../components/Cars/PriceFilter'
import SeatFilter from '../../components/Cars/SeatFilter'
import CarCardShadow from '../../components/Cars/CarCardShadow'

export default function CarList() {
  return (
    <Layout>
      <Flex
        mt={50}
        gap={6}
        justifyContent="center"
        flexDir={{ base: 'column', md: 'row' }}
        px={3}
      >
        <SearchBar />

        <BrandFilter />
        <SeatFilter />
        <PriceFilter />
      </Flex>
      <Flex my={10} gap={14} flexDir="column">
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
      </Flex>
    </Layout>
  )
}
