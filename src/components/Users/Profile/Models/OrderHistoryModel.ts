import { useState } from 'react'
import { type OrderData } from '../../../../pages/Users/ProfileLoader'
import { getOrders } from '../../../../services/apis/order'
import { type MetaData } from '../../../../services/apis/type'
import { callToast } from '../../../../utils/toasts'

export default function OrderHistoryModel(
  initialOrder: OrderData[],
  meta: MetaData
) {
  const [filter, setFilter] = useState('Order History')
  const [data, setData] = useState(initialOrder)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasNext, setHasNext] = useState(meta.has_next)
  const [loading, setLoading] = useState(false)

  const nextPageHandler = async () => {
    if (!hasNext) return

    setLoading(true)
    const result = await refetch(currentPage + 1)
    setLoading(false)

    if (!result) return

    setCurrentPage((prev) => prev + 1)
    setHasNext(result.meta.has_next)
    setData(result.data)
  }

  const prevPageHandler = async () => {
    if (currentPage === 1) return

    setLoading(true)
    const result = await refetch(currentPage - 1)
    setLoading(false)

    if (!result) return

    setCurrentPage((prev) => prev - 1)
    setHasNext(result.meta.has_next)
    setData(result.data)
  }

  const refetch = async (
    page?: number,
    signal?: AbortSignal,
    inDemandFilter?: string
  ) => {
    const filtering = filter !== 'Order History' ? filter : undefined

    const order = await getOrders(inDemandFilter ?? filtering, page, signal)

    if (!order) {
      callToast('failed to fetch order history', 'error')
      return false
    }

    return order
  }

  const onMenuChange = async (type: string) => {
    if (type === '') {
      setFilter('Order History')
    } else {
      setFilter(type)
    }

    setLoading(true)
    const result = await refetch(undefined, undefined, type)
    setLoading(false)

    if (!result) return
    setData(result.data)
    setCurrentPage(result.meta.current_page)
    setHasNext(result.meta.has_next)
  }

  return {
    data,
    loading,
    onMenuChange,
    nextPageHandler,
    prevPageHandler,
    hasNext,
    hasPrevious: currentPage > 1,
    startIndex: currentPage > 1 ? (currentPage - 1) * 15 : 0,
    filter: filter.charAt(0).toUpperCase() + filter.slice(1)
  }
}
