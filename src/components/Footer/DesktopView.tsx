import { Box, Image } from '@chakra-ui/react'
import Contact from './Contact'
import FaqButton from './FaqButton'

export default function DesktopView() {
  return (
    <Box w="full" position="relative" mt={10}>
      <Image
        src="/maps.webp"
        width="100%"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />
      <Box
        position="absolute"
        top={7}
        left={10}
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Image src="/logo.webp" width="272px" />
        <Contact />
      </Box>
      <FaqButton right={5} bottom={5} position="absolute" />
    </Box>
  )
}
