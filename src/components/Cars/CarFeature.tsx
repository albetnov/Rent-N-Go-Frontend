import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { FiBriefcase } from 'react-icons/fi'
import { GiCarSeat } from 'react-icons/gi'

interface CarFeatureProps {
  stock: number
  seats: number
  baggages: number
}

export default function CarFeature({
  stock,
  seats,
  baggages
}: CarFeatureProps) {
  const fontSize = useBreakpointValue({ base: 18, md: 24 })

  return (
    <Flex flexDir="column" gap={2}>
      <Text color="primary" fontSize={fontSize}>
        {stock} ready to rent
      </Text>
      <Flex gap={3}>
        <GiCarSeat fontSize={fontSize} />
        <Text fontSize={fontSize}>{seats} Seats</Text>
      </Flex>
      <Flex gap={3}>
        <FiBriefcase fontSize={fontSize} />
        <Text fontSize={fontSize}>{baggages} Baggages</Text>
      </Flex>
    </Flex>
  )
}
