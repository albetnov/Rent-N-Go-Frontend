import { Box, Image, Text } from '@chakra-ui/react'

interface FaqProps {
  question: string
  answer: string
}

export default function FaqCard({
  question,
  answer
}: FaqProps) {
  return (
      <Box>
      <Text
        as='b'
        fontFamily='poppins'
        maxW={700}
        fontSize={20}          
        mt={10}>
            {question}
        </Text>

        <Text
        fontFamily='poppins'
        maxW={900}
        fontSize={20}
        fontWeight={40}>
            {answer}
        </Text>
      </Box>
  )
}
