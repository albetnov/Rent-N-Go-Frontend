import axios from 'axios'
import { callToast, toast } from './toasts'

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

const getTokens = () => {
  const token = localStorage.getItem('tokens')
  if (token) {
    return JSON.parse(token)
  }

  return null
}

const refreshToken = async () => {
  const token = getTokens()
  try {
    const result = await client.post('/auth/refresh', {
      refreshToken: token.refresh_token
    })
    localStorage.setItem('tokens', JSON.stringify(result.data))
  } catch (err) {
    localStorage.removeItem('tokens')
    return false
  }

  return localStorage.getItem('tokens')
}

client.interceptors.request.use(async (api) => {
  let token = await getTokens()

  if (!token) {
    localStorage.removeItem('tokens')
    console.warn('Token exchange failed')
    return api
  }

  if (
    token.token_expired_at < Date.now() &&
    token.refresh_token_expired_at > Date.now()
  ) {
    await refreshToken()
    token = await getTokens()
  }

  if (!token) {
    localStorage.removeItem('tokens')
    console.warn('token exchange failed')
    return api
  }

  api.headers.Authorization = `Bearer ${token.token}`

  return api
})

client.interceptors.response.use(undefined, async (error) => {
  if (!error.response) {
    callToast('something went wrong', 'error')
    return await Promise.reject(error)
  }

  if (error.response.status >= 500) {
    toast({
      title: 'Error',
      description: 'Something went wrong. Please try again later.',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top-right'
    })
  }

  if (
    error.response.status === 400 &&
    error.response.data.action === 'INVALID_PAYLOAD'
  ) {
    const errors = error.response.data.errors
      .map((item: any) => `${item.FailedFields.split('.')[1]} is ${item.Tag}`)
      .join(',')

    toast({
      title: 'Error sending data',
      description: `Please check the fields and try again: ${errors}`,
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right'
    })
  }

  if (error.response.status === 401) {
    const token = getTokens()

    if (!token) {
      localStorage.removeItem('tokens')
      return await Promise.reject(error)
    }

    try {
      await refreshToken()
      return await axios(error.config)
    } catch (err) {
      localStorage.removeItem('tokens')
    }
  }

  callToast('Something went wrong', 'error')

  return await Promise.reject(error)
})

export default client
