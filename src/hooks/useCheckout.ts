import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../stores/auth'
import { callToast } from '../utils/toasts'

export default function useCheckout(cb: () => Promise<void>) {
  const [isLoading, setIsLoading] = useState(false)

  const { isLoggedIn } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn
  }))

  const navigate = useNavigate()

  const checkout = async () => {
    if (!isLoggedIn) {
      callToast('Ups, you suppose to log in first!', 'error')

      setTimeout(() => {
        navigate('/auth/login')
      }, 2500)

      return
    }

    setIsLoading(true)
    await cb()
    setIsLoading(false)
    navigate('/order')
  }

  return { isLoading, checkout }
}
