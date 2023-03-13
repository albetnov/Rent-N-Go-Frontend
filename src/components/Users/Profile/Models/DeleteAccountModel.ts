import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { deleteAccount } from '../../../../services/apis/profile'
import useAuthStore from '../../../../stores/auth'
import { callToast } from '../../../../utils/toasts'

export default function DeleteAccountModel() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)
  const { logout } = useAuthStore((state) => ({ logout: state.logout }))

  const onAccountDeletion = async () => {
    setIsLoading(true)
    const result = await deleteAccount()
    setIsLoading(false)

    if (!result) {
      callToast('Failed to delete account', 'error')
      return
    }

    callToast(result, 'success', 2000, 'Scheduling logout')
    setTimeout(() => {
      logout()
    }, 2500)
  }

  return {
    isOpen,
    onOpen,
    onClose,
    onAccountDeletion,
    isLoading
  }
}
