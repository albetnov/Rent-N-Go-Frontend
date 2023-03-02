import { Text, type TextProps } from '@chakra-ui/react'

export default function SectionText(props: TextProps) {
  return (
    <Text
      {...props}
      fontWeight={700}
      fontSize={{ base: '2xl', lg: '43px' }}
      mb={{ base: 3, lg: 12 }}
    />
  )
}
