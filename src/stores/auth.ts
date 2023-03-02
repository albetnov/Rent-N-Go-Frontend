import { create } from 'zustand'
import { login as apiLogin } from '../services/apis/auth'
import { callToast } from '../utils/toasts'

interface AuthStore {
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: localStorage.getItem('tokens') !== null,

  async login(email: string, password: string) {
    const result = await apiLogin({ email, password })
    if (result) {
      localStorage.setItem('tokens', JSON.stringify(result))
      callToast('Logged in successfully')
      set({ isLoggedIn: true })
      return true
    }

    callToast('Invalid credentials', 'error')
    return false
  },

  logout() {
    localStorage.removeItem('tokens')
    set({ isLoggedIn: false })
  }
}))

export default useAuthStore
