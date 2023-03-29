import useOrderWizardStore from '../../stores/orderWizard'
import dayjs from 'dayjs'

export default function SecondFlowModel() {
  const { location, finish, item } = useOrderWizardStore((state) => ({
    location: state.getLocation!,
    finish: state.finishSecondFlow,
    cancel: state.cancelOrder,
    item: state.item!
  }))

  const estimate = dayjs(location.returnDate)
    .diff(location.pickUpDate, 'day')
    .toLocaleString()

  return {
    pickupLocation: location.pickUpLocation,
    pickupDate: location.pickUpDate,
    returnLocation: location.returnLocation,
    returnDate: location.returnDate,
    rentalEstimation: estimate.toLocaleString(),
    rentalDuration: location.duration,
    next: finish,
    item
  }
}
