import dayjs from 'dayjs'
import { create } from 'zustand'
import HaveOrder from '../services/apis/HaveOrder'
import {
  hasOrder,
  placeOrder,
  type PlaceOrderOptions
} from '../services/apis/order'

interface GenericOrderItemService {
  photo: string
  name: string
  price: number
}

interface OrderCar extends GenericOrderItemService {
  licensePlate: string
}

interface OrderItem {
  module: 'tour' | 'car' | 'driver'
  tour?: GenericOrderItemService
  driver?: GenericOrderItemService
  car: OrderCar
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
  enableOrder: () => void
  hasOrder: boolean
  doneOrder: () => void
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

  enableOrder() {
    localStorage.setItem(WIZARD_STEP, '1')
    const fakeData: OrderItem = {
      module: 'tour',
      tour: {
        photo: 'https://source.unsplash.com/1000x1000?tour',
        name: 'some touring',
        price: 10000
      },
      car: {
        photo: 'https://source.unsplash.com/1000x1000?car',
        name: 'some car',
        price: 10000,
        licensePlate: 'AFG-1930'
      },
      driver: {
        photo: 'https://source.unsplash.com/1000x1000?driver',
        name: 'some driver',
        price: 10000
      },
      tourId: 1,
      totalAmount: 30000
    }
    localStorage.setItem(ORDER_ITEM, JSON.stringify(fakeData))
    set(() => ({ hasOrder: true, step: 1, item: fakeData }))
  },

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
    // TODO: fetch the tour data
    // const tourData = await client.get(tourId)

    // TODO: map the tour data
    const item: OrderItem = {
      module: 'tour',
      tour: {
        name: '',
        photo: '',
        price: 0
      },
      driver: {
        name: '',
        photo: '',
        price: 0
      },
      car: {
        name: '',
        photo: '',
        price: 0,
        licensePlate: ''
      },
      totalAmount: 0,
      tourId
    }

    // TODO: fetch the driver data and append it to order item
    // const driverData = await client.get(tourData.driverId)
    // item.push({})

    // TODO: fetch the car data and append it to order item
    // const carData  = await client.get(tourData.carId)
    // item.push({})

    localStorage.setItem(WIZARD_STEP, '2')
    // TODO: set the location of the order to the tour location
    // localStorage.setItem(ORDER_LOCATION, JSON.stringify({}))
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item }))
  },

  async orderCar(carId) {
    if (await hasOrder()) {
      get().cancelOrder('You have an order, please finish it first.')
      return
    }
    // TODO: fetch the car data
    // const result = await client.get(carId)

    // TODO: map the car data
    const item: OrderItem = {
      module: 'car',
      car: { name: '', photo: '', price: 0, licensePlate: '' },
      totalAmount: 0,
      carId
    }

    localStorage.setItem(WIZARD_STEP, '1')
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item, step: 1 }))
  },

  async orderDriver(driverId, carId) {
    if (await hasOrder()) {
      get().cancelOrder('You have an order, please finish it first.')
      return
    }
    // TODO: fetch the driver data
    // const result = await client.get(driverId)

    // TODO: map the driver data
    const item: OrderItem = {
      module: 'driver',
      car: { name: '', photo: '', price: 0, licensePlate: '' },
      driver: { name: '', photo: '', price: 0 },
      totalAmount: 0,
      driverId,
      carId
    }

    // TODO: fetch the car data and append it to order item
    // const carData  = await client.get(carId)
    // item.push({})

    localStorage.setItem(WIZARD_STEP, '1')
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item, step: 1 }))
  }
}))

export default useOrderWizardStore
