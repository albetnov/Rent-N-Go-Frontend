import client from '../../utils/client'
import { type MetaData, type MappedPicture } from './type'
interface TourCar {
  id: number
  create_at: string
  updated_at: string
  deleted_at: any
  name: string
  stock: number
  desc: string
  price: number
  pictures: MappedPicture[]
  seats: number
  baggage: number
}

interface TourDriver {
  id: number
  create_at: string
  updated_at: string
  deleted_at: any
  name: string
  desc: string
  price: number
  pictures: MappedPicture[]
}

export interface TourData {
  created_at: string
  deleted_at: any
  desc: string
  id: number
  name: string
  pictures: MappedPicture[]
  price: number
  stock: number
  updated_at: string
  car: TourCar
  driver: TourDriver
}

export interface TourResponse {
  data: TourData[]
  meta: MetaData
  message: string
}

interface TourRequestOptions {
  price?: number
  page?: number
  signal?: AbortSignal
  search?: string
}

const getTours = async ({
  price,
  page,
  signal,
  search
}: TourRequestOptions): Promise<TourResponse | false> => {
  try {
    const res = await client.get('/tours', {
      params: {
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

const getTourDetail = async (id: number): Promise<TourData | false> => {
  try {
    const res = await client.get(`/tours/${id}`)

    if (res.status !== 200) {
      throw new Error('Something went wrong')
    }

    return res.data.data
  } catch (err) {
    console.error('nt', err)
    return false
  }
}

export { getTours, getTourDetail }
