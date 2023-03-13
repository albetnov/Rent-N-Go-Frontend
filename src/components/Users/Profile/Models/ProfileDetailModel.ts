import { type UserData } from '../../../../pages/Users/ProfileLoader'
import {
  completeOrUpdateNik,
  updateProfile
} from '../../../../services/apis/profile'
import { callToast } from '../../../../utils/toasts'
import { type FetcherFunc } from '../types'

export default function ProfileDetailModel(
  user: UserData,
  refetch: FetcherFunc
) {
  const profileChangeContext = async ({
    phoneNumber,
    message,
    email,
    name
  }: {
    phoneNumber?: string
    email?: string
    name?: string
    message: string
  }) => {
    const result = await updateProfile({
      phone_number: phoneNumber ?? user.tel,
      email: email ?? user.email,
      name: name ?? user.name
    })

    if (!result) {
      callToast(message, 'error')
      return
    }

    callToast(result)
    await refetch()
  }

  const phoneNumberHandler = async (phoneNumber: string) => {
    await profileChangeContext({
      phoneNumber,
      message: 'Failed update phone number'
    })
  }

  const emailHandler = async (email: string) => {
    await profileChangeContext({ email, message: 'Failed update user email' })
  }

  const nikHandler = async (nik: string) => {
    const result = await completeOrUpdateNik(parseInt(nik))

    if (!result) {
      callToast('Failed update nik', 'error')
      return
    }

    callToast(result)
    await refetch()
  }

  return { phoneNumberHandler, emailHandler, nikHandler }
}
