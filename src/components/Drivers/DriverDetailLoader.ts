import { json } from 'react-router-dom'
import { getDriverDetail } from '../../services/apis/driver'
import { getCars } from '../../services/apis/car'

export default async function DriverDetailLoader({ params }: any) {
  const [driver, cars] = await Promise.all([
    getDriverDetail(params.id),
    getCars({})
  ])
  if (!driver) {
    return json({ ctx: 'ERROR' }, { status: 404 })
  }
  return json({ driver, cars })
}
