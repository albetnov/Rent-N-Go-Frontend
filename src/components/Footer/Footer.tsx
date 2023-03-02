import { Box, Image } from '@chakra-ui/react'
import Contact from './Contact'
import FaqButton from './FaqButton'

export default function Footer() {
  return (
    <Box w="full" position="relative">
      <Image
        src="/maps.webp"
        width="100%"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />
      <Contact />
      <FaqButton />
    </Box>
  )
}
