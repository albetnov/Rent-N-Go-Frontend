import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'

interface FeatureProps {
  name: string
  isChecked?: boolean
}

export default function Feature({ name, isChecked = false }: FeatureProps) {
  const fontSize = useBreakpointValue({ base: 14, lg: 24 })

  return (
    <Flex gap={2} alignItems="center">
      {isChecked ? (
        <FiCheckCircle fontSize={fontSize} />
      ) : (
        <FiXCircle fontSize={fontSize} />
      )}
      <Text fontSize={20}>{name}</Text>
    </Flex>
  )
}
