import { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import useCustomBackground from '../../hooks/useCustomBackground'
import { getProfile } from '../../services/apis/profile'
import colors from '../../utils/colors'
import { callToast } from '../../utils/toasts'
import { mapToUserData, type UserData } from './ProfileLoader'

export default function ProfileModel() {
  useCustomBackground(colors.secondary)
  const userData = useLoaderData()

  const navigate = useNavigate()

  const [user, setUser] = useState<UserData>()

  const refetch = async () => {
    const result = await getProfile()

    if (!result) {
      callToast('Something went wrong', 'error')
      return
    }

    setUser(mapToUserData(result, user!.order))
  }

  useEffect(() => {
    if (!Array.isArray(userData)) {
      if (typeof userData === 'object' && userData && 'ctx' in userData) {
        if (userData.ctx === 'PROFILE') {
          callToast('Failed to get profile!', 'error')
          navigate('/')
          return
        }
      }
    }

    setUser(userData as UserData)
  }, [])

  return { refetch, user }
}
