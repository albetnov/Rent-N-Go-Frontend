import { Button, type ButtonProps } from '@chakra-ui/react'

export default function OutlineButton(props: ButtonProps) {
  return (
    <Button
      mt={16}
      display="block"
      mx="auto"
      bg="none"
      rounded="none"
      border="1px solid black"
      _hover={{ bg: 'white', color: 'black' }}
      {...props}
    />
  )
}
