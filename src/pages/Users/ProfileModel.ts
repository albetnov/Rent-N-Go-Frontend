import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import useCustomBackground from '../../hooks/useCustomBackground'
import { getProfile } from '../../services/apis/profile'
import colors from '../../utils/colors'
import { callToast } from '../../utils/toasts'
import { mapToUserData, type UserData } from './ProfileLoader'

export default function ProfileModel() {
  useCustomBackground(colors.secondary)
  const userData = useLoaderData()
  const [user, setUser] = useState<UserData>(userData as UserData)

  const refetch = async () => {
    const result = await getProfile()

    if (!result) {
      callToast('Something went wrong', 'error')
      return
    }

    setUser(mapToUserData(result))
  }

  return { refetch, user }
}
