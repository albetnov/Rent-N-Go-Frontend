import { CardBody, Card as ChakraCard, type CardProps } from '@chakra-ui/react'

export default function Card({ children, ...props }: CardProps) {
  return (
    <ChakraCard w="full" bg="white" shadow="lg" {...props}>
      <CardBody
        bg="white"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: 10, md: 0 }}
      >
        {children}
      </CardBody>
    </ChakraCard>
  )
}
