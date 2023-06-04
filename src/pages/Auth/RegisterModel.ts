import { useDisclosure } from '@chakra-ui/react'
import { type ChangeEvent, type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../services/apis/auth'
import { callToast } from '../../utils/toasts'

const initialFields = {
  name: '',
  email: '',
  phoneNumber: ''
}
export default function RegisterModel() {
  const [fields, setFields] = useState(initialFields)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { isOpen, onClose, onOpen } = useDisclosure()
  const [isUserAgree, setIsUserAgree] = useState(false)

  const userIsAgreeHandler = () => {
    setIsUserAgree(true)
  }

  const navigate = useNavigate()

  const onFieldChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const onUserAgreeHandler = async () => {
    if (!isUserAgree) {
      callToast('Hey, wtf man? Check that shit. You think I am dumb?', 'error')
      return
    }

    await registerAction()
    onClose()
  }

  const registerAction = async () => {
    setIsUserAgree(false)
    const result = await register({
      name: fields.name,
      email: fields.email,
      phone_number: fields.phoneNumber,
      password,
      confirm_password: confirmPassword
    })

    if (result.action) {
      if (result.action === 'CHANGE_EMAIL') callToast(result.message, 'error')
      return
    }

    if (result) {
      callToast('Registered successfully', 'success')
      setFields(initialFields)
      setPassword('')
      setConfirmPassword('')
      setTimeout(() => {
        navigate('/auth/login')
      }, 2000)
    }
  }

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()

    onOpen()
  }

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const confirmPasswordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSubmitHandler,
    fields,
    onFieldChangeHandler,
    passwordChangeHandler,
    confirmPasswordChangeHandler,
    isOpen,
    onUserAgreeHandler,
    onClose,
    isUserAgree,
    userIsAgreeHandler
  }
}
