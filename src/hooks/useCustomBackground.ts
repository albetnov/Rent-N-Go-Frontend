import { useEffect } from 'react'

export default function useCustomBackground(color: string) {
  useEffect(() => {
    document.body.style.backgroundColor = color

    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])
}
