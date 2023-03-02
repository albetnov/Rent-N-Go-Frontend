/* eslint-disable multiline-ternary */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  ListItem,
  UnorderedList,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import useAuthStore from '../../stores/auth'
import RouterLink from '../RouterLink'
import Profile from './Profile'
import { type TopbarViewProps } from './Topbar'
import WhiteLink from './WhiteLink'

export default function MobileView({ links }: TopbarViewProps) {
  const { isLoggedIn } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn
  }))
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        onClick={onOpen}
        bg="none"
        border="1px solid white"
        color="white"
        _hover={{}}
        _active={{}}
        ref={buttonRef}
      >
        <FiMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={buttonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerHeader bg="primary" color="white">
            Navigation
          </DrawerHeader>
          <DrawerBody py={5}>
            <UnorderedList listStyleType="none">
              {links.map((item) => (
                <ListItem key={item.name}>
                  <RouterLink
                    to={item.path}
                    px={7}
                    py={5}
                    shadow="lg"
                    rounded="lg"
                    mb={7}
                    display="block"
                  >
                    {item.name}
                  </RouterLink>
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
          <DrawerFooter bg="primary">
            {isLoggedIn ? (
              <Profile />
            ) : (
              <WhiteLink to="/auth/login">Login</WhiteLink>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
