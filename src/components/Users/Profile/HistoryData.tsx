import { Td, Tr } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { type OrderData } from '../../../pages/Users/ProfileLoader'

interface HistoryOrderProps {
  item: OrderData
  i: number
}

export default function HistoryData({ item, i }: HistoryOrderProps) {
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

  return (
    <Tr key={item.id}>
      <Td>{++i}</Td>
      <Td>{item.type}</Td>
      <Td>{getItemNameByType(item)}</Td>
      <Td>{item.status}</Td>
      <Td>
        {item.total_amount} | {item.payment_method}
      </Td>
      <Td>{getDurationByDate(item)} Days</Td>
    </Tr>
  )
}
