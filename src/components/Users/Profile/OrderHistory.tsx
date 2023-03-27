/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import useInfiniteScroll from '../../../hooks/useInfiniteScroll'
import { type OrderData } from '../../../pages/Users/ProfileLoader'
import { getOrders } from '../../../services/apis/order'
import { type MetaData } from '../../../services/apis/type'
import { callToast } from '../../../utils/toasts'
import OrderItem from './OrderItem'

interface OrderHistoryProps {
  initialOrder: OrderData[]
  meta: MetaData
}

export default function OrderHistory({
  initialOrder,
  meta
}: OrderHistoryProps) {
  const [filter, setFilter] = useState('Order History')
  const [loading, setLoading] = useState(false)

  const refetch = async (
    filter?: string,
    page?: number,
    signal?: AbortSignal
  ) => {
    const order = await getOrders(filter, page, signal)

    if (!order) {
      callToast('failed to fetch order history', 'error')
      return false
    }

    return order
  }

  const { data, ref, setData, setPageNumber, setNextPage } = useInfiniteScroll(
    async (signal, page) => {
      const result = await refetch(undefined, page, signal)

      if (result) return result
      return false
    },
    initialOrder,
    meta.current_page,
    meta.has_next
  )

  const onMenuChange = async (type: string) => {
    if (type === '') {
      setFilter('Order History')
    } else {
      setFilter(type.charAt(0).toUpperCase() + type.slice(1))
    }

    setLoading(true)
    const result = await refetch(type)
    if (!result) {
      setData(result.data)
      setPageNumber(0)
      setNextPage(result.meta.has_next)
    }
    setLoading(false)
  }

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
    <Box mt={14}>
      <Menu>
        {({ isOpen }) => {
          return (
            <>
              <MenuButton
                disabled={loading}
                as={Button}
                bg="white"
                shadow="lg"
                rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
              >
                {filter}
              </MenuButton>
              <MenuList p="2.5">
                <OrderItem onClick={() => onMenuChange('')}>All</OrderItem>
                <OrderItem onClick={() => onMenuChange('car')}>Car</OrderItem>
                <OrderItem onClick={() => onMenuChange('driver')}>
                  Driver
                </OrderItem>
                <OrderItem onClick={() => onMenuChange('tour')}>
                  Tour Guide
                </OrderItem>
              </MenuList>
            </>
          )
        }}
      </Menu>
      <Flex mt={14} gap={8} flexDir="column" justifyContent="center">
        <TableContainer>
          <Table variant="unstyled">
            <Thead bg="primary" color="white">
              <Tr>
                <Th>No.</Th>
                <Th>Type</Th>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Price</Th>
                <Th>Duration</Th>
              </Tr>
            </Thead>
            <Tbody bg="white">
              {data.map((item, i) => {
                if (data.length !== i + 1) {
                  return (
                    <Tr key={item.id}>
                      <Td>{++i}</Td>
                      <Td>{item.type}</Td>
                      <Td>{getItemNameByType(item)}</Td>
                      <Td>{item.status}</Td>
                      <Td>{item.total_amount}</Td>
                      <Td>{getDurationByDate(item)} Days</Td>
                    </Tr>
                  )
                }
                return (
                  <Tr key={item.id} ref={ref}>
                    <Td>{++i}</Td>
                    <Td>{item.type}</Td>
                    <Td>{getItemNameByType(item)}</Td>
                    <Td>{item.status}</Td>
                    <Td>{item.total_amount}</Td>
                    <Td>{getDurationByDate(item)} Days</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  )
}
