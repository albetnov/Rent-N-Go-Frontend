import { create } from 'zustand'

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
}

const useOrderWizardStore = create<OrderWizardStore>((set) => ({
  step: parseInt(localStorage.getItem('wizard_step') ?? '0'),
  hasOrder: !!localStorage.getItem('wizard_step'),

  enableOrder() {
    localStorage.setItem('wizard_step', '1')
    set(() => ({ hasOrder: true, step: 1 }))
  },

  doneOrder() {
    localStorage.removeItem('order_location')
    localStorage.removeItem('wizard_step')
    set(() => ({ hasOrder: false, step: 0 }))
  },

  inc() {
    set((state) => ({ step: state.step + 1 }))
  },

  dec() {
    set((state) => ({ step: state.step - 1 }))
  },

  setFirstFlow(pickUpDate, pickUpLocation, returnDate, returnLocation) {
    localStorage.setItem(
      'order_location',
      JSON.stringify({
        pickUpDate,
        pickUpLocation,
        returnDate,
        returnLocation
      })
    )

    localStorage.setItem('wizard_step', '2')
    set(() => ({ step: 2 }))
  }
}))

export default useOrderWizardStore
