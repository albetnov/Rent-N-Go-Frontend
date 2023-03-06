import {
  Badge,
  Card,
  CardBody,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Biography from './Biography'

export interface BioCardProps {
  name: string
  role: string
  isDeprecated: boolean
  taskDesc: string
  selfDesc: React.ReactNode
  pictures: string[]
  sosmed: string
  projects: number
}

export default function BioCard({
  name,
  role,
  isDeprecated,
  taskDesc,
  selfDesc,
  pictures,
  sosmed,
  projects
}: BioCardProps) {
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Biography
            isDeprecated={isDeprecated}
            name={name}
            selfDesc={selfDesc}
            projects={projects}
            sosmed={sosmed}
            pictures={pictures}
          />
        </ModalContent>
      </Modal>
      <GridItem>
        <Card onClick={onOpen} _hover={{ cursor: 'pointer', shadow: 'xl' }}>
          <CardBody>
            <Image
              src="https://source.unsplash.com/1000x1000?potrait"
              height="600px"
              objectFit="cover"
              rounded="lg"
            />
            <Stack mt={6} spacing={5}>
              <Heading size="md">{name}</Heading>
              <Badge rounded="lg" w="fit-content" colorScheme="blue">
                {role}
              </Badge>
              <Text>{taskDesc}</Text>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </>
  )
}
