import { Box, Button, Image } from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'

export default function ProfilePicture() {
  return (
    <Box position="relative" w="fit-content">
      <Image
        src="https://source.unsplash.com/1000x1000?potrait"
        maxW="184px"
        maxH="194px"
        rounded="full"
      />
      <Button
        rounded="full"
        p={3}
        shadow="lg"
        position="absolute"
        bottom={3}
        right={0}
        bg="white"
      >
        <FiEdit />
      </Button>
    </Box>
  )
}
