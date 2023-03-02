import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from '../stores/auth'

export default function Authed() {
  const { loggedIn } = useAuthStore((state) => ({ loggedIn: state.isLoggedIn }))

  if (loggedIn) {
    return <Outlet />
  }

  return <Navigate to="/auth/login" replace />
}
