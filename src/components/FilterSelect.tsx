import { Select, SelectProps } from '@chakra-ui/react'

export default function FilterSelect(props: SelectProps) {
  return (
    <Select
      {...props}
      boxShadow="2xl"
      bgColor="white"
      maxWidth={300}
      placeholder="Price"
    />
  )
}
