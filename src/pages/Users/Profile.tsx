import { Box, Card, CardBody, Flex } from '@chakra-ui/react'
import Topbar from '../../components/Topbar/Topbar'
import OrderHistory from '../../components/Users/Profile/OrderHistory'
import ProfileDetail from '../../components/Users/Profile/ProfileDetail'
import ProfileName from '../../components/Users/Profile/ProfileName'
import ProfilePicture from '../../components/Users/Profile/ProfilePicture'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'
export default function Profile() {
  useCustomBackground(colors.secondary)

  return (
    <>
      <Topbar />
      <Box my={5} as="section" px={{ base: 0, md: 24 }}>
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
              <ProfilePicture imgUrl="https://source.unsplash.com/1000x1000?potrait" />
              <ProfileName name="Delvin Jason" />
            </Flex>
            <ProfileDetail
              email="delvinjason@mail.com"
              phoneNumber="0928-3939-3948"
            />
          </CardBody>
        </Card>
        <OrderHistory />
      </Box>
    </>
  )
}
