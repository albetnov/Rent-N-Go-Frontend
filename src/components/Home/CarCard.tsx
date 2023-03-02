import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'

export default function CarCard() {
  return (
    <GridItem position="relative" w="fit-content">
      <Text
        position="absolute"
        color="white"
        fontWeight="bold"
        top={1}
        left={3}
        fontSize={30}
        zIndex={2}
      >
        Mobil Pokoknya
      </Text>
      <Box
        position="absolute"
        bg="white"
        zIndex={1}
        p={6}
        bottom={0}
        right={0}
        roundedTopLeft="57px"
      >
        <Image
          src="https://source.unsplash.com/500x500?logo"
          width={{ base: '90px', md: '105px' }}
          height={{ base: '80px', md: '90px' }}
          objectFit="cover"
        />
      </Box>
      <Image
        src="https://source.unsplash.com/1280x720?cars"
        width={{ base: '320px', md: '427px' }}
        height={{ base: '230px', md: '288px' }}
        objectFit="cover"
        filter="brightness(0.7)"
      />
      <Flex
        bg="white"
        alignItems={{ base: 'start', md: 'center' }}
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: 0, md: 3 }}
        px={3}
      >
        <Text fontSize="sm" color="gray.400" textDecoration="line-through">
          Rp. 100.000/day
        </Text>
        <Text fontSize="lg" fontWeight={700}>
          Rp 90.000/day
        </Text>
      </Flex>
    </GridItem>
  )
}
