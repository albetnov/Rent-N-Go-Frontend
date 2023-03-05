import { Box } from '@chakra-ui/react'
import CarCard from './CarCard'

export default function () {
  return (
    <Box mx="auto" w="full" maxW="8xl" boxShadow="dark-lg">
      <CarCard
        name="Lexus LC 500"
        imgUrl="https://bit.ly/dan-abramov"
        seats={4}
        baggages={2}
        stock={10}
      />
    </Box>
  )
}
