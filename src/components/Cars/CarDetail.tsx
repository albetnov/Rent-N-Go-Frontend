import { Box, Image, Text } from '@chakra-ui/react'

interface CarDetailProps {
  name: string
  imgUrl: string
}

export default function CarDetail({ name, imgUrl }: CarDetailProps) {
  return (
    <Box>
      <Text fontWeight={700} fontSize={{ base: 14, md: 24 }}>
        {name}
      </Text>
      <Image src={imgUrl} maxW={313} maxH={167} mt={9} />
    </Box>
  )
}
