import { FormControl, Select, Text } from '@chakra-ui/react'
import { type PropsWithChildren, type ChangeEvent } from 'react'

interface OrderSelectProps extends PropsWithChildren {
  label: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function OrderSelect({
  label,
  value,
  onChange,
  children
}: OrderSelectProps) {
  return (
    <FormControl mt={5}>
      <Text fontWeight="bold" fontSize={25}>
        {label}
      </Text>
      <Select
        onChange={onChange}
        value={value}
        mt="3.5"
        borderColor="black"
        _hover={{}}
        rounded="none"
      >
        {children}
      </Select>
    </FormControl>
  )
}
