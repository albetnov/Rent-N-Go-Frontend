import { create } from 'zustand'

interface OrderItem {
  module: 'tours' | 'cars' | 'drivers'
  photo: string
  name: string
  price: number
  licensePlate?: string
}

interface OrderWizardStore {
  step: number
  enableOrder: () => void
  inc: () => void
  dec: () => void
  hasOrder: boolean
  doneOrder: () => void
  setFirstFlow: (
    pickUpDate: string,
    pickUpLocation: string,
    returnDate: string,
    returnLocation: string
  ) => void
  getLocation: string | null
  item: OrderItem[] | null
  finishSecondFlow: () => void
  finishThirdFlow: () => void
  orderTour: (tourId: number) => Promise<void>
  orderDriver: (driverId: number, carId: number) => Promise<void>
  orderCar: (carId: number) => Promise<void>
}

const WIZARD_STEP = 'wizard_step'
const ORDER_LOCATION = 'order_location'
const ORDER_ITEM = 'order_item'

const useOrderWizardStore = create<OrderWizardStore>((set) => ({
  step: parseInt(localStorage.getItem(WIZARD_STEP) ?? '0'),
  hasOrder: !!localStorage.getItem(WIZARD_STEP),
  getLocation: localStorage.getItem(ORDER_LOCATION),
  item: localStorage.getItem(ORDER_ITEM)
    ? (JSON.parse(localStorage.getItem(ORDER_ITEM) as string) as OrderItem[])
    : null,

  enableOrder() {
    localStorage.setItem(WIZARD_STEP, '1')
    set(() => ({ hasOrder: true, step: 1 }))
  },

  doneOrder() {
    localStorage.removeItem(ORDER_LOCATION)
    localStorage.removeItem(WIZARD_STEP)
    localStorage.removeItem(ORDER_ITEM)
    set(() => ({ hasOrder: false, step: 0, item: null, getLocation: null }))
  },

  inc() {
    set((state) => ({ step: state.step + 1 }))
  },

  dec() {
    set((state) => ({ step: state.step - 1 }))
  },

  setFirstFlow(pickUpDate, pickUpLocation, returnDate, returnLocation) {
    const payload = JSON.stringify({
      pickUpDate,
      pickUpLocation,
      returnDate,
      returnLocation
    })

    localStorage.setItem(ORDER_LOCATION, payload)
    localStorage.setItem(WIZARD_STEP, '2')

    set(() => ({ step: 2, getLocation: payload }))
  },

  finishSecondFlow() {
    localStorage.setItem(WIZARD_STEP, '3')
    set(() => ({ step: 3 }))
  },

  finishThirdFlow() {
    localStorage.setItem(WIZARD_STEP, '4')
    set(() => ({ step: 4 }))
  },

  async orderTour(tourId) {
    // TODO: fetch the tour data
    // const tourData = await client.get(tourId)

    // TODO: map the tour data
    const item: OrderItem[] = [
      {
        module: 'tours',
        photo: 'photo',
        name: '',
        price: 1
      }
    ]

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
    // TODO: fetch the car data
    // const result = await client.get(carId)

    // TODO: map the car data
    const item: OrderItem[] = [
      {
        module: 'cars',
        name: '',
        photo: '',
        price: 0,
        licensePlate: ''
      }
    ]

    localStorage.setItem(WIZARD_STEP, '1')
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item, step: 1 }))
  },

  async orderDriver(driverId, carId) {
    // TODO: fetch the driver data
    // const result = await client.get(driverId)

    // TODO: map the driver data
    const item: OrderItem[] = [
      {
        module: 'drivers',
        name: '',
        photo: '',
        price: 0
      }
    ]

    // TODO: fetch the car data and append it to order item
    // const carData  = await client.get(carId)
    // item.push({})

    localStorage.setItem(WIZARD_STEP, '1')
    localStorage.setItem(ORDER_ITEM, JSON.stringify(item))
    set(() => ({ item, step: 1 }))
  }
}))

export default useOrderWizardStore
