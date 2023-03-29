/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  Box,
  Button,
  Card,
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
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp
} from 'react-icons/fi'
import { type OrderData } from '../../../pages/Users/ProfileLoader'
import { type MetaData } from '../../../services/apis/type'
import CenteredText from '../../CenteredText'
import HistoryData from './HistoryData'
import OrderHistoryModel from './Models/OrderHistoryModel'
import OrderItem from './OrderItem'

interface OrderHistoryProps {
  initialOrder: OrderData[] | null
  meta: MetaData
}

export default function OrderHistory({
  initialOrder,
  meta
}: OrderHistoryProps) {
  const {
    data,
    loading,
    onMenuChange,
    filter,
    nextPageHandler,
    prevPageHandler,
    hasPrevious,
    hasNext,
    startIndex
  } = OrderHistoryModel(initialOrder ?? [], meta)

  if (!initialOrder) {
    return (
      <Card my={7} bg="white" p={8} rounded="lg" shadow="lg">
        <CenteredText fontSize={36}>Cannot find any order</CenteredText>
      </Card>
    )
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
                return (
                  <HistoryData i={startIndex + i} key={item.id} item={item} />
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box mx="auto">
          {hasPrevious && (
            <Button
              mr={3}
              onClick={prevPageHandler}
              colorScheme="messenger"
              variant="outline"
            >
              <FiChevronLeft />
            </Button>
          )}
          {hasNext && (
            <Button
              onClick={nextPageHandler}
              colorScheme="messenger"
              variant="outline"
            >
              <FiChevronRight />
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
