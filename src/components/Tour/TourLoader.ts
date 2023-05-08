import { json } from 'react-router-dom'
import { getTours } from '../../services/apis/tour'

export default async function TourLoader() {
  const result = await getTours({})

  if (!result || result.data === null) {
    return json({ ctx: 'ERROR' }, { status: 404 })
  }

  return json({
    tours: result.data,
    meta: result.meta
  })
}
