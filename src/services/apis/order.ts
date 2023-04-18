import { AxiosError } from 'axios'
import client from '../../utils/client'
import HaveOrder from './HaveOrder'
import InvalidOptions from './InvalidOptions'

const getOrders = async (filter?: string, page?: number) => {
  try {
    const result = await client.get('/orders', {
      params: {
        filter,
        page
      }
    })

    if (result.status === 200) {
      return result.data
    }

    return false
  } catch (err) {
    console.error(err)
    return false
  }
}

export interface PlaceOrderOptions {
  tourId?: number
  paymentMethod: string
  driverId?: number
  carId?: number
  startPeriod: string
  endPeriod: string
  type: 'tour' | 'car' | 'driver'
}

const placeOrder = async (options: PlaceOrderOptions) => {
  if (options.type === 'tour' && !options.tourId) {
    throw new InvalidOptions('number', options.tourId)
  }

  if (options.type === 'car' && !options.carId) {
    throw new InvalidOptions('number', options.carId)
  }

  if (options.type === 'driver' && !options.driverId) {
    throw new InvalidOptions('number', options.driverId)
  }

  try {
    const result = await client.post('/orders/place', {
      tour_id: options.tourId,
      car_id: options.carId,
      driver_id: options.driverId,
      payment_method: options.paymentMethod,
      start_period: options.startPeriod,
      end_period: options.endPeriod,
      type: options.type
    })
    if (result.status !== 200) {
      throw new Error(`status code: ${result.status}`)
    }

    return result.data
  } catch (err) {
    console.error(err)
    if (err instanceof AxiosError) {
      if (
        err.response?.data &&
        err.response.data.action === 'ALREADY_HAVE_ORDER'
      ) {
        throw new HaveOrder()
      }
    }
    return false
  }
}

const hasOrder = async () => {
  try {
    const result = await client.get('/orders/active')

    if (result.status !== 200) {
      throw new Error(`status code: ${result.status}`)
    }

    if (result.data.action === 'ALREADY_HAVE_ORDER') {
      return true
    }

    return false
  } catch (err) {
    console.error(err)
    return false
  }
}

export { getOrders, placeOrder, hasOrder }
