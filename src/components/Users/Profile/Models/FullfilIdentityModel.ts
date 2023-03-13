import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { updateSim } from '../../../../services/apis/profile'
import { callToast } from '../../../../utils/toasts'
import { type FetcherFunc } from '../types'

export default function FullfillIdentityModel(refetch: FetcherFunc) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sim, setSim] = useState<File>()
  const [isLoading, setIsLoading] = useState(false)

  const uploadSimHandler = async () => {
    if (!sim) {
      callToast('Please upload your SIM card', 'error')
      return
    }

    setIsLoading(true)
    const result = await updateSim(sim)
    setIsLoading(false)
    if (!result) return

    callToast(result)
    await refetch()
  }

  return {
    sim,
    setSim,
    isOpen,
    onOpen,
    onClose,
    uploadSimHandler,
    isLoading
  }
}
