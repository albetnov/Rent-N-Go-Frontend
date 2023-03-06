import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  Grid,
  Button
} from '@chakra-ui/react'
import { FiArrowLeftCircle, FiInfo } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import BioCard, { type BioCardProps } from '../components/BioCard'
import colors from '../utils/colors'

interface MemberProps extends BioCardProps {
  id: number
}

const members: MemberProps[] = [
  {
    id: 1,
    name: 'Delvin Jason',
    role: 'Developer',
    sosmed: 'djsn',
    pictures: new Array(5).fill(
      'https://source.unsplash.com/500x500?potrait',
      0,
      5
    ),
    taskDesc: 'Primarly working on both backend and frontends',
    selfDesc: <Text>Mantap!</Text>,
    projects: 99,
    isDeprecated: false
  },
  {
    id: 2,
    name: 'Albet Novendo',
    role: 'Developer',
    sosmed: 'al_nv4',
    pictures: new Array(5).fill(
      'https://source.unsplash.com/500x500?potrait',
      0,
      5
    ),
    taskDesc: 'A copy paste and search context proffesionals',
    selfDesc: <Text>Hi! I guess I have 14 projects?? not sure myself.</Text>,
    projects: 14,
    isDeprecated: false
  }
]

export default function Artificier() {
  const navigate = useNavigate()

  const backToProjectHandler = () => {
    navigate('/')
  }

  return (
    <Box as="section" mt={3} mb={10}>
      <Heading fontFamily="raleway" size="3xl" textAlign="center" my={10}>
        Artificier Teams
      </Heading>
      <Card boxShadow="lg" w="fit-content" mx="auto" rounded="lg">
        <CardBody display="flex" gap={5} alignItems="center">
          <FiInfo color={colors.primary} fontSize={36} />
          <Text
            fontWeight="medium"
            fontSize="xl"
            textAlign="center"
            fontFamily="raleway"
          >
            You are viewing Artificier Teams Members
          </Text>
        </CardBody>
      </Card>
      <Grid
        mt={5}
        gap={14}
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
      >
        {members.map((member) => (
          <BioCard key={member.id} {...member} />
        ))}
      </Grid>
      <Button
        colorScheme="blackAlpha"
        display="flex"
        alignItems="center"
        gap={2}
        position="fixed"
        left={3}
        bottom={3}
        onClick={backToProjectHandler}
      >
        <FiArrowLeftCircle color={colors.white} />
        <Text>Back To Project</Text>
      </Button>
    </Box>
  )
}
