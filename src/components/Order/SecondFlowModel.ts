import useOrderWizardStore from '../../stores/orderWizard'
import dayjs from 'dayjs'

export default function SecondFlowModel() {
  const { location, finish } = useOrderWizardStore((state) => ({
    location: state.getLocation,
    finish: state.finishSecondFlow
  }))

  if (!location) {
    return {}
  }

  const parsedLocation = JSON.parse(location)

  const estimate = dayjs(parsedLocation.returnDate)
    .diff(parsedLocation.pickUpDate, 'day')
    .toLocaleString()

  return {
    pickupLocation: parsedLocation.pickUpLocation,
    pickupDate: parsedLocation.pickUpDate,
    returnLocation: parsedLocation.returnLocation,
    returnDate: parsedLocation.returnDate,
    rentalEstimation: estimate,
    next: finish
  }
}
