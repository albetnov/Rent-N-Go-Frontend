import { Select, type SelectProps } from '@chakra-ui/react'

export default function FilterSelect(props: SelectProps) {
  return (
    <Select
      {...props}
      boxShadow="2xl"
      bgColor="white"
      maxWidth={{ base: 'none', md: 300 }}
    />
  )
}
