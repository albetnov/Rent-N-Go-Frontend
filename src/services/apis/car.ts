import client from '../../utils/client'
import { type MappedPicture } from './type'

export interface CarData {
  created_at: string
  deleted_at: any
  desc: string
  id: number
  name: string
  pictures: MappedPicture[]
  price: number
  stock: number
  updated_at: string
  seats: number
  baggages: number
  hold_stock: number
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

const getCars = async (
  seats?: number,
  baggages?: number
): Promise<CarData[] | false> => {
  try {
    const res = await client.get('/cars', {
      params: {
        seats: seats ?? '',
        baggages: baggages ?? ''
      }
    })

    if (res.status !== 200) {
      throw new Error('Something went wrong')
    }

    return res.data.data
  } catch (err) {
    console.error('nt', err)
    return false
  }
}

const getCarDetail = async (id: number): Promise<CarData | false> => {
  try {
    const res = await client.get(`/cars/${id}`)

    if (res.status !== 200) {
      throw new Error('Something went wrong')
    }

    return res.data.data
  } catch (err) {
    console.error('nt', err)
    return false
  }
}

export { getRecommendation, getCars, getCarDetail }
