import { create } from 'zustand'
import { login as apiLogin } from '../services/apis/auth'
import { getProfile } from '../services/apis/profile'
import { callToast } from '../utils/toasts'

interface AuthStore {
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  user: {
    email: string
    name: string
  }
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: localStorage.getItem('tokens') !== null,

  user: { email: '', name: '' },

  async login(email: string, password: string) {
    const result = await apiLogin({ email, password })
    if (result) {
      localStorage.setItem('tokens', JSON.stringify(result))
      const profile = await getProfile()
      set({
        user: {
          email: profile.email,
          name: profile.name
        }
      })
      callToast('Logged in successfully')
      set({ isLoggedIn: true })
      return true
    }

    return false
  },

  logout() {
    localStorage.removeItem('tokens')
    set({ isLoggedIn: false })
  }
}))

export default useAuthStore
