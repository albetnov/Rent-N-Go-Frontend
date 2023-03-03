import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import PasswordInput from '../../Auth/PasswordInput'
import PrimaryButton from '../../PrimaryButton'
import ProfileButtonAction from './ProfileButtonAction'

export default function ChangePassword() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ProfileButtonAction colorScheme="blue" onClick={onOpen}>
        Change Your Password
      </ProfileButtonAction>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Your Password</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <PasswordInput title="Old Password" />
            <PasswordInput title="New Password" />
            <PasswordInput title="Confirm New Password" />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} colorScheme="red">
              Cancel
            </Button>
            <PrimaryButton>Change Password</PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
