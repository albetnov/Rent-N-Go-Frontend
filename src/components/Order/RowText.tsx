import { Flex, Text } from '@chakra-ui/react'

interface RowTextProps {
  text1: string
  text2: string
  isBold?: boolean
  noBold?: boolean
}

export default function RowText({
  text1,
  text2,
  isBold,
  noBold
}: RowTextProps) {
  return (
    <Flex justifyContent="space-between" maxW="lg" w="full">
      <Text fontWeight={noBold ? 'bold' : undefined}>{text1}</Text>
      <Text fontWeight={isBold ? 'bold' : undefined}>{text2}</Text>
    </Flex>
  )
}
