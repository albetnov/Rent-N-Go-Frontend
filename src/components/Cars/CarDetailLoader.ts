import { json } from 'react-router-dom'
import { getCarDetail } from '../../services/apis/car'

export default async function CarDetailLoader({ params }: any) {
  const car = await getCarDetail(params.id)

  if (!car) {
    return json({ ctx: 'ERROR' }, { status: 404 })
  }

  return json(car)
}
