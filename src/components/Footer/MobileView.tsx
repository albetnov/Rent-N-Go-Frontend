import { Flex } from '@chakra-ui/react'
import Logo from '../Topbar/Logo'
import Contact from './Contact'
import FaqButton from './FaqButton'

export default function MobileView() {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-around"
      alignItems="center"
      bg="box-footer"
      py={3}
      position="relative"
      mt={5}
    >
      <Logo />
      <Contact />
      <FaqButton ml={3} position="absolute" right={3} bottom={5} />
    </Flex>
  )
}
