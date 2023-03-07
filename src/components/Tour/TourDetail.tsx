import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'
import { type TourCardProps } from './TourCard'

export default function TourDetail({
  features,
  name
}: Pick<TourCardProps, 'features' | 'name'>) {
  const fontSize = useBreakpointValue({ base: 16, lg: 20 })

  return (
    <Box>
      <Text fontWeight={700} fontSize={{ base: 20, lg: 24 }}>
        {name}
      </Text>
      <Flex flexDir="column" gap={2}>
        {features.map((item) => (
          <Flex key={item.name} gap={1} alignItems="center">
            {item.isChecked ? (
              <FiCheckCircle fontSize={fontSize} />
            ) : (
              <FiXCircle fontSize={fontSize} />
            )}
            <Text fontSize={fontSize}>{item.name}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}
