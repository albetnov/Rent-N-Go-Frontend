import { useState } from 'react'
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll'
import { type OrderData } from '../../../../pages/Users/ProfileLoader'
import { getOrders } from '../../../../services/apis/order'
import { type MetaData } from '../../../../services/apis/type'
import { callToast } from '../../../../utils/toasts'

export default function OrderHistoryModel(
  initialOrder: OrderData[],
  meta: MetaData
) {
  const [filter, setFilter] = useState('Order History')

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

  const { data, ref, loading, setter } = useInfiniteScroll<
    HTMLTableRowElement,
    OrderData
  >(
    async (signal, page) => {
      const result = await refetch(page, signal)

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
      setFilter(type)
    }
    setter({ loading: true })
    const result = await refetch(undefined, undefined, type)
    if (!result) {
      setter({ loading: false })
      return
    }
    setter({
      pageNumber: 1,
      nextPage: result.meta.has_next,
      data: result.data,
      loading: false
    })
  }

  return {
    data,
    ref,
    loading,
    onMenuChange,
    filter: filter.charAt(0).toUpperCase() + filter.slice(1)
  }
}
