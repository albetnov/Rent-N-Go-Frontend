import { useDisclosure } from '@chakra-ui/react'
import { type ChangeEvent, useState } from 'react'
import { updatePassword } from '../../../../services/apis/profile'
import useAuthStore from '../../../../stores/auth'
import { callToast } from '../../../../utils/toasts'

export default function ChangePasswordModel() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { logout } = useAuthStore((state) => ({
    logout: state.logout
  }))

  const onOldPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value)
  }

  const onNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value)
  }
  const onConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const onSubmitHandler = async () => {
    if (confirmPassword !== newPassword) {
      callToast('New password and password confirmation must same!', 'error')
      return
    }

    setIsLoading(true)
    const result = await updatePassword(
      oldPassword,
      newPassword,
      confirmPassword
    )
    setIsLoading(false)

    if (!result) {
      callToast('Failed update password', 'error')
      return
    }

    if (result.action === 'LOGOUT') {
      callToast(
        'Password changed successfully',
        'success',
        3000,
        'Logging you out...'
      )
      setTimeout(() => {
        logout()
      }, 3500)
    }
  }

  return {
    isOpen,
    onOpen,
    onClose,
    oldPassword,
    newPassword,
    confirmPassword,
    onOldPasswordChange,
    onNewPasswordChange,
    onConfirmPasswordChange,
    onSubmitHandler,
    isLoading
  }
}
