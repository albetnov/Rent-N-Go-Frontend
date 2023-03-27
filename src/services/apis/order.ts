import client from '../../utils/client'
import InvalidOptions from './InvalidOptions'

const getOrders = async (
  filter?: string,
  page?: number,
  signal?: AbortSignal
) => {
  const result = await client.get('/orders', {
    params: {
      filter,
      page
    },
    signal
  })

  if (result.status === 200) {
    return result.data
  }

  return []
}

interface PlaceOrderOptions {
  tourId?: number
  paymentMethod: 'BCA' | 'OVO' | 'VISA' | 'DANA' | 'SHOPEE PAY' | 'GOPAY'
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
    return false
  }

  return result.data
}

export { getOrders, placeOrder }
