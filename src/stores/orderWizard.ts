import { create } from 'zustand'

interface OrderItem {
  module: 'tours' | 'cars' | 'drivers'
  tourId?: number
  carId?: number
  driverId?: number
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
  item: OrderItem | null
  finishSecondFlow: () => void
  finishThirdFlow: () => void
  orderTour: (tourId: number) => void
  orderDriver: (driverId: number) => void
  orderCar: (carId: number) => void
}

const useOrderWizardStore = create<OrderWizardStore>((set) => ({
  step: parseInt(localStorage.getItem('wizard_step') ?? '0'),
  hasOrder: !!localStorage.getItem('wizard_step'),
  getLocation: localStorage.getItem('order_location'),
  item: localStorage.getItem('order_item')
    ? (JSON.parse(localStorage.getItem('order_item') as string) as OrderItem)
    : null,

  enableOrder() {
    localStorage.setItem('wizard_step', '1')
    set(() => ({ hasOrder: true, step: 1 }))
  },

  doneOrder() {
    localStorage.removeItem('order_location')
    localStorage.removeItem('wizard_step')
    localStorage.removeItem('order_item')
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

    localStorage.setItem('order_location', payload)
    localStorage.setItem('wizard_step', '2')

    set(() => ({ step: 2, getLocation: payload }))
  },

  finishSecondFlow() {
    localStorage.setItem('wizard_step', '3')
    set(() => ({ step: 3 }))
  },

  finishThirdFlow() {
    localStorage.setItem('wizard_step', '4')
    set(() => ({ step: 4 }))
  },

  orderTour(tourId) {
    const item: OrderItem = {
      module: 'tours',
      tourId
    }

    localStorage.setItem('order_item', JSON.stringify(item))
    set(() => ({ item }))
  },

  orderCar(carId) {
    const item: OrderItem = {
      module: 'cars',
      carId
    }

    localStorage.setItem('order_item', JSON.stringify(item))
    set(() => ({ item }))
  },

  orderDriver(driverId) {
    const item: OrderItem = {
      module: 'drivers',
      driverId
    }

    localStorage.setItem('order_item', JSON.stringify(item))
    set(() => ({ item }))
  }
}))

export default useOrderWizardStore
