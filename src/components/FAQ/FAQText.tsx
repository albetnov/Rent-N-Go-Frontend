import { Text, type TextProps } from '@chakra-ui/react'

export default function FAQText(props: TextProps) {
  return (
    <Text
      {...props}
      fontSize={{ base: 40, lg: 70 }}
      fontWeight="black"
      textAlign="center"
    />
  )
}
