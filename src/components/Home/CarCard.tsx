import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import { type CarData } from '../../services/apis/car'

interface CarCardProps {
  car: CarData
}

export default function CarCard({ car }: CarCardProps) {
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
        {car.name}
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
          src={
            car.pictures && car.pictures.length > 0
              ? car.pictures[0].file_name
              : 'https://source.unsplash.com/500x500?logo'
          }
          width={{ base: '90px', md: '105px' }}
          height={{ base: '80px', md: '90px' }}
          objectFit="cover"
        />
      </Box>
      <Image
        src={
          car.pictures && car.pictures.length > 1
            ? car.pictures[1].file_name
            : 'https://source.unsplash.com/1280x720?cars'
        }
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
        <Text fontSize="lg" fontWeight={700}>
          Rp {new Intl.NumberFormat('id-ID').format(car.price)}/day
        </Text>
      </Flex>
    </GridItem>
  )
}
