import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text
} from '@chakra-ui/react'
import { type BioCardProps } from './BioCard'

export default function Biography({
  projects,
  sosmed,
  isDeprecated,
  selfDesc,
  pictures,
  name
}: Omit<BioCardProps, 'role' | 'taskDesc'>) {
  return (
    <Grid
      maxH="100vh"
      overflowY="auto"
      w="full"
      templateColumns={{ base: '1fr', md: '50% 1fr' }}
      gap={10}
      templateRows={{ base: '1fr', md: '1fr 50%' }}
    >
      <GridItem position="relative">
        <Image
          src={pictures[0]}
          roundedBottomRight={60}
          height="full"
          objectFit="cover"
        />
        {isDeprecated && (
          <Popover trigger="hover">
            <PopoverTrigger>
              <Badge
                colorScheme="red"
                transform="rotateZ(-45deg)"
                position="absolute"
                rounded="full"
                p={5}
                shadow="xl"
                top={48}
                fontSize="6xl"
              >
                Deprecated
              </Badge>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                An ex team members or temporarily splitted from a team. Still
                considered teamate though as we do ever be a team before.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </GridItem>
      <GridItem>
        <Text fontWeight="bold" fontSize={64}>
          {name}
        </Text>
        {selfDesc}
      </GridItem>
      <GridItem>
        <Flex
          shadow="lg"
          rounded="xl"
          p={10}
          maxW={{ base: 'xl', md: '3xl', lg: '4xl' }}
          mx="auto"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize={14}>Social Media</Text>
            <Text color="primary" fontSize={32}>
              @{sosmed}
            </Text>
          </Box>
          <Box>
            <Text fontSize={14}>Age</Text>
            <Text color="primary" fontSize={32}>
              {projects}
            </Text>
          </Box>
        </Flex>
      </GridItem>
      <GridItem>
        <Text fontSize={48} fontWeight="bold">
          Arts
        </Text>
        <Flex gap={3} overflowX="auto">
          {pictures.map((item, i) => {
            if (i !== 0) {
              return (
                <Image width="400px" objectFit="cover" src={item} key={i} />
              )
            }
            return false
          })}
        </Flex>
      </GridItem>
    </Grid>
  )
}
