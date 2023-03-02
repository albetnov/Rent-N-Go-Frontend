import { Box, Image } from '@chakra-ui/react'
import CenteredText from '../CenteredText'

interface ServiceCardProps {
  src: string
  text: string
}

export default function ServiceCard({ src, text }: ServiceCardProps) {
  return (
    <Box maxWidth={480}>
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
