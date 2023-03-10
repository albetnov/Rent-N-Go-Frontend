import { useBreakpointValue } from '@chakra-ui/react'
import useEditField from '../../../../hooks/useEditField'
import { callToast } from '../../../../utils/toasts'

export default function ProfileNameModel(name: string) {
  const { inputRef, isEdit, onEditHandler } = useEditField(name, (value) => {
    callToast('sent to backend: ' + value)
  })

  const fontSize = useBreakpointValue({ base: 10, md: 20, lg: 30 })

  return {
    fontSize,
    isEdit,
    onEditHandler,
    nameRef: inputRef
  }
}
