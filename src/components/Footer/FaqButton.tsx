import { Button } from '@chakra-ui/react'

export default function FaqButton() {
  return (
    <Button
      rounded="full"
      color="white"
      bg="black"
      position="absolute"
      py={5}
      right={5}
      bottom={5}
      _hover={{
        shadow: 'lg'
      }}
      _active={{
        opacity: 0.8
      }}
    >
      ?
    </Button>
  )
}
