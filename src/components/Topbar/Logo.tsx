import { Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Logo() {
  const navigate = useNavigate()

  const onLogoClicked = () => {
    navigate('/')
  }

  return (
    <Image
      onClick={onLogoClicked}
      src="/logo.webp"
      alt="Rent-N-Go Logo"
      width="156px"
      height="40px"
      _hover={{ cursor: 'pointer' }}
    />
  )
}
