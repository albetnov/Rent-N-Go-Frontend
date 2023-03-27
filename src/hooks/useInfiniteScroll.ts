import { useCallback, useEffect, useRef, useState } from 'react'

export default function useInfiniteScroll<T extends HTMLElement, D>(
  callback: (signal: AbortSignal, page: number) => Promise<any>,
  initial: D[],
  currentPage: number,
  hasNext: boolean
) {
  const [data, setData] = useState(initial)
  const [pageNumber, setPageNumber] = useState(currentPage)
  const [loading, setLoading] = useState(false)
  const [nextPage, setNextPage] = useState(hasNext)
  const [error, setError] = useState(false)

  const observer = useRef<IntersectionObserver | null>(null)
  const lastItemRef: React.RefCallback<T> = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextPage) {
          setPageNumber((prev) => prev + 1)
        }
      })

      if (node) observer.current.observe(node)
    },
    [nextPage, loading]
  )

  useEffect(() => {
    if (pageNumber === currentPage) {
      return
    }
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        if (error) return

        setLoading(true)

        const data = await callback(controller.signal, pageNumber)

        if (!data) {
          setError(true)
          return
        }

        setError(false)
        setData((prev) => {
          return [...new Set([...prev, ...data.data])]
        })
        setNextPage(data.meta.has_next)
      } catch (err) {
        setError(true)
        console.error('anjay error', err)
      } finally {
        setLoading(false)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData()

    return () => {
      controller.abort()
    }
  }, [pageNumber])

  interface SetterOptions {
    data?: D[]
    pageNumber?: number
    nextPage?: boolean
    loading?: boolean
  }

  const setter = (options: SetterOptions) => {
    if (options.pageNumber) {
      setPageNumber(options.pageNumber)
    }

    if (options.nextPage) {
      setNextPage(options.nextPage)
    }

    if (options.data) {
      setData(options.data)
    }

    if (typeof options.loading !== 'undefined') {
      setLoading(options.loading)
    }
  }

  return {
    ref: lastItemRef,
    data,
    loading,
    setter
  }
}
