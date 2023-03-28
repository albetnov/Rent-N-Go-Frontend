import { json } from 'react-router-dom'
import { getRecommendation } from '../services/apis/car'

export default async function homeLoader() {
  const cars = await getRecommendation()

  if (!cars) {
    return json({ message: 'Not Found' }, { status: 404 })
  }

  return json(cars)
}
