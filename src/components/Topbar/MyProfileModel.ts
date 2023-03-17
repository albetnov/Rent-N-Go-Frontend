/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import {
  getCompletionStatus,
  getProfilePicture
} from '../../services/apis/profile'
import useOrderWizardStore from '../../stores/orderWizard'

export default function MyProfileModel() {
  const [photo, setPhoto] = useState<string | false>(false)
  const [isComplete, setIsComplete] = useState(false)

  const { hasOrder } = useOrderWizardStore((state) => ({
    hasOrder: state.hasOrder
  }))

  useEffect(() => {
    const photoController = new AbortController()
    const applyPhoto = async () => {
      const propic = await getProfilePicture()

      if (propic) {
        setPhoto(propic)
      }
    }

    const completionStatusController = new AbortController()
    const checkCompletionStatus = async () => {
      setIsComplete(!(await getCompletionStatus()))
    }

    applyPhoto()
    checkCompletionStatus()

    return () => {
      photoController.abort()
      completionStatusController.abort()
      setPhoto(false)
      setIsComplete(false)
    }
  }, [])

  return {
    photo,
    hasOrder,
    isComplete
  }
}
