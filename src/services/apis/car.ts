import client from '../../utils/client'
import { type MappedFeature, type MappedPicture } from './type'

export interface CarData {
  created_at: string
  deleted_at: any
  desc: string
  features: MappedFeature[]
  id: number
  name: string
  pictures: MappedPicture[]
  price: number
  stock: number
  updated_at: string
}
const getRecommendation = async (): Promise<CarData[] | false> => {
  try {
    const res = await client.get('/cars/recommendation')

    if (res.status !== 200) {
      throw new Error('Something went wrong')
    }

    return res.data.cars
  } catch (err) {
    console.error('nt', err)
    return false
  }
}

export { getRecommendation }
