import { useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export default function useEditField(
  beforeValue: string,
  callback?: (value: string) => void
) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEdit, setIsEdit] = useState(false)

  const onEditHandler = () => {
    if (isEdit) {
      setIsEdit(false)
      if (inputRef.current?.value === beforeValue) {
        return
      }
      if (callback) {
        // eslint-disable-next-line n/no-callback-literal
        callback(inputRef.current?.value ?? '')
      }
      return
    }
    setIsEdit(true)
  }
  return {
    isEdit,
    onEditHandler,
    inputRef
  }
}
