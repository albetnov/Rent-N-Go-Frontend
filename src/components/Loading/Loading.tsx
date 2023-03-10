import { Card, CardBody, Flex } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import loadingAnimation from './loading.json'

export default function Loading() {
  return (
    <Flex
      w="full"
      h="100vh"
      bg="blackAlpha.500"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        shadow="lg"
        maxW="xs"
        maxH="xs"
        rounded="xl"
        border="1px solid"
        borderColor="gray.300"
      >
        <CardBody>
          <Lottie animationData={loadingAnimation} />
        </CardBody>
      </Card>
    </Flex>
  )
}
