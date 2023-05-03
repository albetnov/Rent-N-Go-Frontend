import { Flex, type FlexProps, Text } from '@chakra-ui/react'
import { type IconType } from 'react-icons'

interface IconCardProps {
  flexProps?: FlexProps
  Icon: IconType
  text: string | number
}

export default function IconCard({ Icon, flexProps, text }: IconCardProps) {
  return (
    <Flex gap={5} alignItems="center" {...flexProps}>
      <Icon fontSize={20} />
      <Text fontSize={20}>{text}</Text>
    </Flex>
  )
}
