import { Box, Card, CardBody, Flex } from '@chakra-ui/react'
import Topbar from '../../components/Topbar/Topbar'
import ProfileDetail from '../../components/Users/Profile/ProfileDetail'
import ProfileName from '../../components/Users/Profile/ProfileName'
import ProfilePicture from '../../components/Users/Profile/ProfilePicture'

export default function Profile() {
  return (
    <>
      <Topbar />
      <Box as="section" px={{ base: 0, md: 24 }}>
        <Card mt={10} mx="auto" shadow="xl" rounded="2xl">
          <CardBody
            display="flex"
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent="space-around"
          >
            <Flex
              gap={12}
              flexDir={{ base: 'column', md: 'row' }}
              alignItems="center"
            >
              <ProfilePicture />
              <ProfileName />
            </Flex>
            <ProfileDetail />
          </CardBody>
        </Card>
      </Box>
    </>
  )
}
