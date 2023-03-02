import { ListItem } from '@chakra-ui/react'
import useAuthStore from '../../stores/auth'
import MyProfile from './MyProfile'
import WhiteLink from './WhiteLink'

export default function Profile() {
  const { isLoggedIn } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn
  }))

  if (isLoggedIn) {
    return (
      <ListItem>
        <MyProfile />
      </ListItem>
    )
  }

  return (
    <>
      <ListItem>
        <WhiteLink to="/auth/login">Login</WhiteLink>
      </ListItem>
      <ListItem>
        <WhiteLink to="/auth/register">Register</WhiteLink>
      </ListItem>
    </>
  )
}
