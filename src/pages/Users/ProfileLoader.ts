import { json } from 'react-router-dom'
import { getProfile } from '../../services/apis/profile'

export interface UserData {
  name: string
  email: string
  tel: string
  nik: string
  sim: string
  photo: string
}

export function mapToUserData(user: any) {
  return {
    name: user.name,
    email: user.email,
    tel: user.phone,
    nik: user.nik,
    sim: user.sim,
    photo: user.photo.PhotoPath
  }
}

export default async function ProfileLoader() {
  const result = await getProfile()

  if (!result) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('Not Found', { status: 404 })
  }

  return json(mapToUserData(result))
}
