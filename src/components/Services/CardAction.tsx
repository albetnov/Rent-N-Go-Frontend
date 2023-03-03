import { Box, Flex, Text } from '@chakra-ui/react'
import PrimaryButton from '../PrimaryButton'

interface CardActionProps {
  price?: number
}

export default function CardAction({ price = 100000 }: CardActionProps) {
  return (
    <Box alignSelf="flex-end">
      <Flex flexDir="column">
        <Text fontSize={{ base: 12, md: 20 }}>From</Text>
        <Text fontSize={{ base: 12, md: 20 }}>
          <Text fontSize={{ base: 14, md: 24 }} as="span" color="orange.600">
            Rp {new Intl.NumberFormat('id-ID').format(price)}
          </Text>{' '}
          / Day
        </Text>
      </Flex>
      <PrimaryButton px={{ base: 7, md: 14 }} py={{ base: 3, md: 7 }} mt={5}>
        Continue
      </PrimaryButton>
    </Box>
  )
}
