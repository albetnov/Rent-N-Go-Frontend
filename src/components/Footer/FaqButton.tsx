import { Button, type ButtonProps } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function FaqButton(props: ButtonProps) {
  const navigate = useNavigate()

  const redirectToFaq = () => {
    navigate('/faq')
  }

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
      onClick={redirectToFaq}
    >
      ? | FAQ
    </Button>
  )
}
