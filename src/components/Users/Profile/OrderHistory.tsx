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
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { type OrderData } from '../../../pages/Users/ProfileLoader'
import { type MetaData } from '../../../services/apis/type'
import HistoryData from './HistoryData'
import OrderHistoryModel from './Models/OrderHistoryModel'
import OrderItem from './OrderItem'

interface OrderHistoryProps {
  initialOrder: OrderData[]
  meta: MetaData
}

export default function OrderHistory({
  initialOrder,
  meta
}: OrderHistoryProps) {
  const { data, loading, onMenuChange, ref, filter } = OrderHistoryModel(
    initialOrder,
    meta
  )

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
              {data.map((item, i) => (
                <HistoryData
                  i={i}
                  key={item.id}
                  ref={data.length === i + 1 ? ref : undefined}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  )
}
