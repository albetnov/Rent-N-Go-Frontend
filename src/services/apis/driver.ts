import client from '../../utils/client'
import { type MetaData, type MappedPicture } from './type'

export interface DriverData {
  created_at: string
  deleted_at: any
  desc: string
  id: number
  name: string
  pictures: MappedPicture[]
  price: number
  updated_at: string
  stars: number
}

export interface DriverResponse {
  data: DriverData[]
  meta: MetaData
  message: string
}

interface DriverRequestOptions {
  price?: number
  page?: number
  signal?: AbortSignal
  search?: string
}

const getDrivers = async ({
  price,
  page,
  signal,
  search
}: DriverRequestOptions): Promise<DriverResponse | false> => {
  try {
    const res = await client.get('/drivers', {
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

const getDriverDetail = async (id: number): Promise<DriverData | false> => {
  try {
    const res = await client.get(`/drivers/${id}`)

    if (res.status !== 200) {
      throw new Error('Something went wrong')
    }

    return res.data.data
  } catch (err) {
    console.error('nt', err)
    return false
  }
}

export { getDrivers, getDriverDetail }
