import { Input, Text } from '@chakra-ui/react'
import useEditField from '../../../hooks/useEditField'
import BorderlessTableData from './BorderlessTableData'
import ProfileEditButton from './ProfileEditButton'

interface EditableFieldProps {
  value: string
  callback?: (value: string) => void
}

export default function EditableField({ value, callback }: EditableFieldProps) {
  const { onEditHandler, isEdit, inputRef } = useEditField(value, callback)

  return (
    <BorderlessTableData display="flex" alignItems="center">
      {isEdit ? (
        <Input ref={inputRef} defaultValue={value} />
      ) : (
        <Text>{value}</Text>
      )}
      <ProfileEditButton onEdit={onEditHandler} />
    </BorderlessTableData>
  )
}
