import { Flex, type FlexProps } from '@chakra-ui/react'

export default function ItemContainer(props: FlexProps) {
  return <Flex {...props} my={10} gap={14} flexDir="column" />
}
