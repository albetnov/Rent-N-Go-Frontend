import { json } from 'react-router-dom'
import { getDrivers } from '../../services/apis/driver'

export default async function DriverLoader() {
  const result = await getDrivers({})

  if (!result || result.data === null) {
    return json({ ctx: 'ERROR' }, { status: 404 })
  }

  return json({
    drivers: result.data,
    meta: result.meta
  })
}
