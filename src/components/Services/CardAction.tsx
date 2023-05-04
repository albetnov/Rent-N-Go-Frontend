import { Box, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'

interface CardActionProps {
  price?: number
  type?: string
  id?: number
}

export default function CardAction({
  price = 100000,
  type = 'Day',
  id = 0
}: CardActionProps) {
  const navigate = useNavigate()

  const navigateToDetail = () => {
    navigate(`/cars/${id}`)
  }

  return (
    <Box alignSelf="flex-end">
      <Flex flexDir="column">
        <Text fontSize={{ base: 12, md: 20 }}>From</Text>
        <Text fontSize={{ base: 12, md: 20 }}>
          <Text fontSize={{ base: 14, md: 24 }} as="span" color="orange.600">
            Rp {new Intl.NumberFormat('id-ID').format(price)}
          </Text>{' '}
          / {type}
        </Text>
      </Flex>
      <PrimaryButton
        onClick={navigateToDetail}
        px={{ base: 7, md: 14 }}
        py={{ base: 3, md: 7 }}
        mt={5}
      >
        Continue
      </PrimaryButton>
    </Box>
  )
}
