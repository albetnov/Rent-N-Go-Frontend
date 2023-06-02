import dayjs from 'dayjs'
import { create } from 'zustand'
import { type CarData, getCarDetail } from '../services/apis/car'

import { getTourDetail } from '../services/apis/tour'
import HaveOrder from '../services/apis/HaveOrder'
import {
  hasOrder,
  placeOrder,
  type PlaceOrderOptions
} from '../services/apis/order'
import { callToast } from '../utils/toasts'
import { type DriverData, getDriverDetail } from '../services/apis/driver'

interface GenericOrderItemService {
  photo: string
  name: string
  price: number
}

interface OrderItem {
  module: 'tour' | 'car' | 'driver'
  tour?: GenericOrderItemService
  driver?: GenericOrderItemService
  car: GenericOrderItemService
  totalAmount: number
  carId?: number
  driverId?: number
  tourId?: number
}

interface PickupData {
  pickUpDate: string
  pickUpLocation: string
  returnDate: string
  returnLocation: string
  duration: number
}

interface OrderWizardStore {
  step: number
  hasOrder: boolean
  setFirstFlow: (options: Omit<PickupData, 'duration'>) => void
  getLocation: PickupData | null
  item: OrderItem | null
  paymentMethod: string | null
  finishSecondFlow: () => void
  finishThirdFlow: (paymentMethod: string) => void
  orderTour: (tourId: number) => Promise<void>
  orderDriver: (driverId: number, carId: number) => Promise<void>
  orderCar: (carId: number) => Promise<void>
  cancelOrder: (reason?: string) => void
  doneOrder: () => void
  isCancelled: boolean
  reason: string | null
}

const WIZARD_STEP = 'wizard_step'
const ORDER_LOCATION = 'order_location'
const ORDER_ITEM = 'order_item'
const PAYMENT_METHOD = 'payment_method'

const useOrderWizardStore = create<OrderWizardStore>((set, get) => ({
  step: parseInt(localStorage.getItem(WIZARD_STEP) ?? '0'),
  hasOrder: !!localStorage.getItem(WIZARD_STEP),
  getLocation: localStorage.getItem(ORDER_LOCATION)
    ? (JSON.parse(localStorage.getItem(ORDER_LOCATION) as string) as PickupData)
    : null,
  item: localStorage.getItem(ORDER_ITEM)
    ? (JSON.parse(localStorage.getItem(ORDER_ITEM) as string) as OrderItem)
    : null,
  paymentMethod: localStorage.getItem(PAYMENT_METHOD),
  isCancelled: false,
  reason: null,

  cancelOrder(reason) {
    localStorage.removeItem(ORDER_LOCATION)
    localStorage.removeItem(WIZARD_STEP)
    localStorage.removeItem(ORDER_ITEM)
    localStorage.removeItem(PAYMENT_METHOD)
    set(() => ({
      hasOrder: false,
      step: 0,
      item: null,
      getLocation: null,
      isCancelled: true,
      reason: reason ?? 'Failed when creating order, please try again later.'
    }))
  },

  doneOrder() {
    localStorage.removeItem(ORDER_LOCATION)
    localStorage.removeItem(WIZARD_STEP)
    localStorage.removeItem(ORDER_ITEM)
    localStorage.removeItem(PAYMENT_METHOD)
    set(() => ({ hasOrder: false, step: 0, item: null, getLocation: null }))
  },

  setFirstFlow({ pickUpDate, pickUpLocation, returnDate, returnLocation }) {
    const payload = {
      pickUpDate,
      pickUpLocation,
      returnDate,
      returnLocation,
      duration: dayjs(returnDate).diff(dayjs(pickUpDate), 'day')
    }

    localStorage.setItem(ORDER_LOCATION, JSON.stringify(payload))
    localStorage.setItem(WIZARD_STEP, '2')

    set(() => ({ step: 2, getLocation: payload }))
  },

  finishSecondFlow() {
    localStorage.setItem(WIZARD_STEP, '3')
    set(() => ({ step: 3 }))
  },

  async finishThirdFlow(paymentMethod) {
    const payload = get().item!

    const builder: PlaceOrderOptions = {
      type: payload.module,
      paymentMethod: get().paymentMethod ?? 'BCA',
      startPeriod: dayjs(get().getLocation?.pickUpDate).toISOString(),
      endPeriod: dayjs(get().getLocation?.returnDate).toISOString()
    }

    switch (payload.module) {
      case 'tour':
        builder.tourId = payload.tourId
        break
      case 'car':
        builder.carId = payload.carId
        break
      case 'driver':
        builder.driverId = payload.driverId
        builder.carId = payload.carId
        break
    }

    try {
      const res = await placeOrder(builder)
      if (!res) {
        get().cancelOrder()
        return
      }
    } catch (err) {
      if (err instanceof HaveOrder) {
        get().cancelOrder(err.message)
      }
    }

    localStorage.setItem(WIZARD_STEP, '4')
    localStorage.setItem(PAYMENT_METHOD, paymentMethod)
    set((state) => ({
      step: 4,
      paymentMethod: state.paymentMethod
    }))
  },

  async orderTour(tourId) {
    if (await hasOrder()) {
      get().cancelOrder('You have an order, please finish it first.')
      return
    }

    const result = await getTourDetail(tourId)

    if (!result) {
      callToast('Failed to get tour data, please try again later.', 'error')
      return
    }

    const item: OrderItem = {
      module: 'tour',
      tourId,
      totalAmount: result.price,
      tour: {
        name: result.name,
        photo: result.pictures[0].file_name,
        price: result.price
      },
      car: {
        name: result.car.Name,
        photo: result.car.Pictures[0].file_name,
        price: result.car.Price
      },
      driver: {
        name: result.driver.Name,
        photo: result.driver.Pictures[0].file_name,
        price: result.driver.Price
      }
    }

    localStorage.setItem(WIZARD_STEP, '1')
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item, step: 1, hasOrder: true }))
  },

  async orderCar(carId) {
    if (await hasOrder()) {
      get().cancelOrder('You have an order, please finish it first.')
      return
    }
    // TODO: fetch the car data
    const result = await getCarDetail(carId)

    if (!result) {
      callToast('Failed to get car data, please try again later.', 'error')
      return
    }

    // TODO: map the car data
    const item: OrderItem = {
      module: 'car',
      car: {
        name: result.name,
        photo: result.pictures[0].file_name,
        price: result.price
      },
      totalAmount: result.price,
      carId
    }

    localStorage.setItem(WIZARD_STEP, '1')
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item, step: 1, hasOrder: true }))
  },

  async orderDriver(driverId, carId) {
    if (await hasOrder()) {
      get().cancelOrder('You have an order, please finish it first.')
      return
    }
    const [driverResult, carResult]: [DriverData | false, CarData | false] =
      await Promise.all([getDriverDetail(driverId), getCarDetail(carId)])

    if (!driverResult || !carResult) {
      get().cancelOrder('Failed to get driver data, please try again later.')
      return
    }

    // TODO: map the driver data
    const item: OrderItem = {
      module: 'driver',
      car: {
        name: carResult.name,
        photo: carResult.pictures[0].file_name,
        price: carResult.price
      },
      driver: {
        name: driverResult.name,
        photo: driverResult.pictures[0].file_name,
        price: driverResult.price
      },
      totalAmount: driverResult.price + carResult.price,
      driverId,
      carId
    }

    localStorage.setItem(WIZARD_STEP, '1')
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item, step: 1, hasOrder: true }))
  }
}))

export default useOrderWizardStore
