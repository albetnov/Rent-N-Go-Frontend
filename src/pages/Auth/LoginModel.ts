import { type ChangeEvent, type FormEvent, useState } from 'react'
import useCustomBackground from '../../hooks/useCustomBackground'
import useAuthStore from '../../stores/auth'
import colors from '../../utils/colors'

export default function LoginModel() {
  useCustomBackground(colors.primary)

  const { login } = useAuthStore((state) => ({
    login: state.login
  }))

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()
    const result = await login(email, password)

    if (!result) setPassword('')
  }

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmitHandler
  }
}
