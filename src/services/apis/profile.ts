import client from '../../utils/client'

const getProfilePicture = async () => {
  const result = await client.get('/profiles/current')

  if (result.status < 200) {
    return false
  }

  return result.data.data.photo.PhotoPath
}

const getCompletionStatus = async () => {
  const result = await client.get('/profiles/status')

  if (result.status > 200 && result.data.percentage === 100) {
    return true
  }

  return false
}

export { getProfilePicture, getCompletionStatus }
