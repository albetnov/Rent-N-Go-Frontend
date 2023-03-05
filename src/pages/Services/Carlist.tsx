import Layout from '../../components/Layout'
import CarCard from '../../components/Cars/CarCard'
import { Box, Flex } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import SearchBar from '../../components/Searchbar'
import BrandFilter from '../../components/Cars/BrandFilter'
import PriceFilter from '../../components/Cars/PriceFilter'
import SeatFilter from '../../components/Cars/SeatFilter'

export default function CarList() {
  return (
    <Layout>
      <Flex mt={50} gap={6} px={70}>
        <SearchBar />

        <BrandFilter />
        <SeatFilter />
        <PriceFilter />
      </Flex>
      <Box px={70}>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Lexus LC 500"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Mazda Rx 7"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Mustang"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Lexus LC 500"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Avanza Toyota"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Suzuki Apv"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Subaru"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Ferrari"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
        <Box mr="70px" mt="50px" boxShadow="dark-lg">
          <CarCard
            name="Jeep"
            imgUrl="https://bit.ly/dan-abramov"
            seats={4}
            baggages={2}
            stock={10}
          />
        </Box>
      </Box>
    </Layout>
  )
}
