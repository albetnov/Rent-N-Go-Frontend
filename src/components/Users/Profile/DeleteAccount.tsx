import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import PrimaryButton from '../../PrimaryButton'
import ProfileButtonAction from './ProfileButtonAction'

export default function DeleteAccount() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ProfileButtonAction colorScheme="red" onClick={onOpen}>
        Delete Account
      </ProfileButtonAction>

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Delete Account?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure bout this sir? Think twice.</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} colorScheme="red">
              Of course, not.
            </Button>
            <PrimaryButton>I am sorry, but yes.</PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
