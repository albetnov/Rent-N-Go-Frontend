import { useBreakpointValue } from '@chakra-ui/react'
import useEditField from '../../../../hooks/useEditField'
import { type UserData } from '../../../../pages/Users/ProfileLoader'
import { updateProfile } from '../../../../services/apis/profile'
import { callToast } from '../../../../utils/toasts'
import { type FetcherFunc } from '../types'

export default function ProfileNameModel(user: UserData, fetcher: FetcherFunc) {
  const { inputRef, isEdit, onEditHandler } = useEditField(
    user.name,
    async (value) => {
      const result = await updateProfile({
        name: value,
        email: user.email,
        phone_number: user.tel
      })

      if (!result) {
        callToast('Failed update user info', 'error')
        return
      }

      callToast(result)
      await fetcher()
    }
  )

  const fontSize = useBreakpointValue({ base: 10, md: 20, lg: 30 })

  return {
    fontSize,
    isEdit,
    onEditHandler,
    nameRef: inputRef
  }
}
