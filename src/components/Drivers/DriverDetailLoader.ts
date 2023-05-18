import { json } from 'react-router-dom'
import { getDriverDetail } from '../../services/apis/driver'

export default async function DriverDetailLoader({ params }: any) {
  const driver = await getDriverDetail(params.id)

  if (!driver) {
    return json({ ctx: 'ERROR' }, { status: 404 })
  }

  return json(driver)
}
