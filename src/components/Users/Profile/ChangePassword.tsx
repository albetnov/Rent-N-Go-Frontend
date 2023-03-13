import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import PasswordInput from '../../Auth/PasswordInput'
import PrimaryButton from '../../PrimaryButton'
import ChangePasswordModel from './Models/ChangePasswordModel'
import ProfileButtonAction from './ProfileButtonAction'

export default function ChangePassword() {
  const {
    isOpen,
    onOpen,
    onClose,
    confirmPassword,
    newPassword,
    oldPassword,
    onConfirmPasswordChange,
    onNewPasswordChange,
    onOldPasswordChange,
    onSubmitHandler
  } = ChangePasswordModel()
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
            <PasswordInput
              title="Old Password"
              InputProps={{
                onChange: onOldPasswordChange,
                value: oldPassword
              }}
            />
            <PasswordInput
              title="New Password"
              InputProps={{
                onChange: onNewPasswordChange,
                value: newPassword
              }}
            />
            <PasswordInput
              title="Confirm New Password"
              InputProps={{
                onChange: onConfirmPasswordChange,
                value: confirmPassword
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} colorScheme="red">
              Cancel
            </Button>
            <PrimaryButton onClick={onSubmitHandler}>
              Change Password
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
