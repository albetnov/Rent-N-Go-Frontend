import { AxiosError } from 'axios'
import client from '../../utils/client'
import { callToast } from '../../utils/toasts'

const getProfile = async () => {
  const result = await client.get('/profiles/current')

  if (result.status < 200 || result.status > 300) {
    return false
  }

  return result.data.data
}

const getProfilePicture = async () => {
  const result = await getProfile()

  if (!result) return result

  return result.photo.PhotoPath
}

const getCompletionStatus = async () => {
  const result = await client.get('/profiles/status')

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

export {
  getProfilePicture,
  getCompletionStatus,
  getProfile,
  updateProfilePhoto
}