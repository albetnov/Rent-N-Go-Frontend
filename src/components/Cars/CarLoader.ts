import { json } from 'react-router-dom'
import { getCars } from '../../services/apis/car'

export default async function CarLoader() {
  const result = await getCars()

  if (!result) {
    return json({ ctx: 'ERROR' }, { status: 404 })
  }

  return json(result)
}
