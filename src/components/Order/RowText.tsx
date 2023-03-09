import { Flex, Text } from '@chakra-ui/react'

interface RowTextProps {
  text1: string
  text2: string
  isBold?: boolean
}

export default function RowText({ text1, text2, isBold }: RowTextProps) {
  return (
    <Flex justifyContent="space-between" maxW="lg" w="full">
      <Text fontWeight="bold">{text1}</Text>
      <Text fontWeight={isBold ? 'bold' : undefined}>{text2}</Text>
    </Flex>
  )
}
