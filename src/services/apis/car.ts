import client from '../../utils/client'
import { type MetaData, type MappedPicture } from './type'

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

export interface CarResponse {
  data: CarData[]
  meta: MetaData
  message: string
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

interface CarRequestOptions {
  seats?: number
  price?: number
  page?: number
  signal?: AbortSignal
  search?: string
}

const getCars = async ({
  seats,
  price,
  page,
  signal,
  search
}: CarRequestOptions): Promise<CarResponse | false> => {
  try {
    const res = await client.get('/cars', {
      params: {
        seats: seats ?? '',
        price: price ?? '',
        page: page ?? '',
        search: search ?? ''
      },
      signal: signal ?? undefined
    })

    if (res.status !== 200) {
      throw new Error('Something went wrong')
    }

    return res.data
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

async function getCarData(): Promise<CarData | undefined> {
  const carResponse = await getCars({})

  if (carResponse) {
    const carData: CarData = carResponse.data[0]

    return carData
  } else {
    console.log('Failed to get tour data, please try again later.', 'error')
  }
}

export { getRecommendation, getCars, getCarDetail, getCarData }
