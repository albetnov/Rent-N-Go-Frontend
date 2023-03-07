import { Flex, type FlexProps } from '@chakra-ui/react'

export default function FilterContainer(props: FlexProps) {
  return (
    <Flex
      {...props}
      mt={50}
      px={3}
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'start', md: 'center' }}
      gap={6}
    />
  )
}
