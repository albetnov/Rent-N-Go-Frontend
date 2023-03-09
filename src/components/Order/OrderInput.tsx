import { FormControl, Input, Text } from '@chakra-ui/react'
import { type ChangeEvent } from 'react'

interface OrderInputProps {
  label: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function OrderInput({
  label,
  onChange,
  value
}: OrderInputProps) {
  return (
    <FormControl>
      <Text fontWeight="bold" fontSize={25}>
        {label}
      </Text>
      <Input
        value={value}
        mt="3.5"
        type="datetime-local"
        borderColor="black"
        rounded="none"
        _hover={{}}
        onChange={onChange}
      />
    </FormControl>
  )
}
