import { Button, type ButtonProps } from '@chakra-ui/react'

export default function FaqButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      rounded="full"
      color="white"
      bg="black"
      py={5}
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
