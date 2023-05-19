import { Td, Tr } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import { type OrderData } from '../../../pages/Users/ProfileLoader'
import { cancelOrder } from '../../../services/apis/order'
import { callToast } from '../../../utils/toasts'
import PrimaryButton from '../../PrimaryButton'

interface HistoryOrderProps {
  item: OrderData
  i: number
}

export default function HistoryData({ item, i }: HistoryOrderProps) {
  const [orderStatus, setOrderStatus] = useState(item.status)

  const getItemNameByType = (payload: OrderData) => {
    switch (payload.type) {
      case 'car':
        return payload.car!.Name
      case 'driver':
        return payload.driver!.Name
      case 'tour':
        return payload.tour!.Name
      default:
        return 'Unknown'
    }
  }

  const getDurationByDate = (payload: OrderData) => {
    const start = dayjs(payload.start_period).startOf('day')
    const end = dayjs(payload.end_period).startOf('day')

    return end.diff(start, 'day')
  }

  const onOrderCancelled = async () => {
    const result = await cancelOrder(item.id)
    if (!result) {
      callToast('Ups failed to cancel order, please try again later.', 'error')
      return
    }

    callToast('Order has been cancelled', 'success')
    setOrderStatus('cancelled')
  }

  return (
    <Tr key={item.id}>
      <Td textAlign="center">{++i}</Td>
      <Td textAlign="center">{item.type}</Td>
      <Td textAlign="center">{getItemNameByType(item)}</Td>
      <Td textAlign="center">{orderStatus}</Td>
      <Td textAlign="center">
        {item.total_amount} | {item.payment_method}
      </Td>
      <Td textAlign="center">{getDurationByDate(item)} Days</Td>
      <Td textAlign="center">
        {orderStatus === 'active' ? (
          <PrimaryButton onClick={onOrderCancelled}>Cancel Order</PrimaryButton>
        ) : (
          'No Action'
        )}
      </Td>
    </Tr>
  )
}
