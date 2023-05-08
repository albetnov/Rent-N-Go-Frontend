import { json } from 'react-router-dom'
import { getTourDetail } from '../../services/apis/tour'

export default async function TourDetailLoader({ params }: any) {
  const tour = await getTourDetail(params.id)

  if (!tour) {
    return json({ ctx: 'ERROR' }, { status: 404 })
  }

  return json(tour)
}
