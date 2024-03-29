import { type ChangeEvent, useState } from 'react'
import useOrderWizardStore from '../../stores/orderWizard'
import { callToast } from '../../utils/toasts'
import dayjs from 'dayjs'
import { useLoaderData } from 'react-router-dom'

export default function firstFlowModel() {
  const { continueOrder } = useOrderWizardStore((state) => ({
    continueOrder: state.setFirstFlow
  }))

  const [pickupDate, setPickupDate] = useState('')
  const [pickupLocation, setPickupLocation] = useState('Batam Kota')
  const [returnDate, setReturnDate] = useState('')
  const [returnLocation, setReturnLocation] = useState('Batam Kota')

  const onPickupDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPickupDate(e.target.value)
  }

  const onPickupLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickupLocation(e.target.value)
  }

  const onReturnDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value)
  }

  const onReturnLocationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setReturnLocation(e.target.value)
  }

  const onSubmit = () => {
    if (
      pickupLocation.trim() === '' ||
      pickupDate.trim() === '' ||
      returnDate.trim() === '' ||
      returnLocation.trim() === ''
    ) {
      callToast('Please fill all the fields', 'error')
      return
    }

    const firstDate = dayjs(pickupDate)
    const secondDate = dayjs(returnDate)

    if (
      firstDate.isBefore(dayjs(), 'day') ||
      !secondDate.isAfter(firstDate, 'day')
    ) {
      callToast(
        'invalid dates being passed',
        'error',
        5000,
        'Please make sure pickup date is today / return date is +1 from pickup day.'
      )
      return
    }
    continueOrder({
      pickUpDate: pickupDate,
      pickUpLocation: pickupLocation,
      returnDate,
      returnLocation
    })
    callToast('Location saved!')
  }

  const locations = useLoaderData()

  return {
    pickupDate,
    pickupLocation,
    returnDate,
    returnLocation,
    onPickupDateChange,
    onPickupLocationChange,
    onReturnDateChange,
    onReturnLocationChange,
    onSubmit,
    locations: (locations as any).kecamatan as any[]
  }
}
