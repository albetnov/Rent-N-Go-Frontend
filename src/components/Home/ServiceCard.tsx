import { Box, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import CenteredText from '../CenteredText'

interface ServiceCardProps {
  src: string
  text: string
  link: string
}

export default function ServiceCard({ src, text, link }: ServiceCardProps) {
  const navigate = useNavigate()

  const navigationHandler = () => {
    navigate(link)
  }

  return (
    <Box
      maxWidth={480}
      transitionProperty="transform"
      transitionDuration="300ms"
      _hover={{
        shadow: 'xl',
        cursor: 'pointer',
        transform: 'scale(1.05)'
      }}
      _active={{
        shadow: 'inner'
      }}
      onClick={navigationHandler}
    >
      <Box bg="primary" shadow="lg" py={5} w="full" maxW={436}>
        <CenteredText
          fontSize={{ base: 'xl', lg: 25 }}
          color="white"
          fontWeight={700}
        >
          {text}
        </CenteredText>
      </Box>
      <Image src={src} />
    </Box>
  )
}
