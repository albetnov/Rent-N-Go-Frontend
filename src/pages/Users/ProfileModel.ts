import { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import useCustomBackground from '../../hooks/useCustomBackground'
import { getProfile } from '../../services/apis/profile'
import colors from '../../utils/colors'
import { callToast } from '../../utils/toasts'
import { mapToUserData, type UserData } from './ProfileLoader'
import { getOrders } from '../../services/apis/order'

export default function ProfileModel() {
  useCustomBackground(colors.secondary)
  const userData = useLoaderData()

  const navigate = useNavigate()

  const [user, setUser] = useState<UserData>()

  const refetch = async () => {
    const [profile, userOrder] = await Promise.all([getProfile(), getOrders()])

    if (!profile || !userOrder) {
      callToast('Something went wrong', 'error')
      return
    }
    setUser(mapToUserData(profile, userOrder))
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
