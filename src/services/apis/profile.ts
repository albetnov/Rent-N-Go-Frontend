import { AxiosError } from 'axios'
import client from '../../utils/client'
import { callToast } from '../../utils/toasts'

const getProfile = async (signal?: AbortSignal) => {
  const result = await client.get('/profiles/current', { signal })

  if (result.status < 200 || result.status > 300) {
    return false
  }

  return result.data.data
}

const getProfilePicture = async (signal?: AbortSignal) => {
  const result = await getProfile(signal)

  if (!result) return result

  return result.photo.PhotoPath
}

const getCompletionStatus = async (signal?: AbortSignal) => {
  const result = await client.get('/profiles/status', { signal })

  if (result.status > 200 && result.data.percentage === 100) {
    return true
  }

  return false
}

const updateProfilePhoto = async (photo: File) => {
  const formData = new FormData()
  formData.append('file_name', photo)

  try {
    const result = await client.post('/profiles/update/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if (result.status < 200 || result.status > 300) {
      callToast('Failed update profile picture', 'error')
      return false
    }

    return result.data.message
  } catch (err: any) {
    if (err instanceof AxiosError) {
      callToast(err.response?.data.error, 'error')
    }

    return false
  }
}

interface UpdateProfileProps {
  name: string
  phone_number: string
  email: string
}

const updateProfile = async (data: UpdateProfileProps) => {
  const result = await client.put('/profiles/update', data)

  if (result.status > 199 || result.status < 300) {
    return result.data.message
  }

  return false
}

const completeOrUpdateNik = async (nik: number) => {
  const result = await client.put('/profiles/update/nik', { nik })

  if (result.status > 199 || result.status < 300) {
    return result.data.message
  }

  return false
}

const updateSim = async (sim: File) => {
  const formData = new FormData()
  formData.append('file_name', sim)

  try {
    const result = await client.post('/profiles/update/sim', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if (result.status < 200 || result.status > 300) {
      callToast('Failed update profile picture', 'error')
      return false
    }

    return result.data.message
  } catch (err: any) {
    if (err instanceof AxiosError) {
      callToast(err.response?.data.error, 'error')
    }

    return false
  }
}

const updatePassword = async (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  const result = await client.put('/profiles/update/password', {
    old_password: oldPassword,
    password: newPassword,
    confirm_password: confirmPassword
  })

  if (result.status > 199 || result.status < 300) {
    return result.data
  }

  return false
}

const deleteAccount = async () => {
  const result = await client.delete('/profiles/delete')

  if (result.status > 199 || result.status < 300) {
    return result.data.message
  }

  return false
}

export {
  getProfilePicture,
  getCompletionStatus,
  getProfile,
  updateProfilePhoto,
  updateProfile,
  completeOrUpdateNik,
  updateSim,
  updatePassword,
  deleteAccount
}
