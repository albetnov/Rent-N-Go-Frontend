import { Box, Text } from '@chakra-ui/react'

interface FaqProps {
  question: string
  answer: string
}

export default function FaqCard({ question, answer }: FaqProps) {
  return (
    <Box mb="2rem">
      <Text as="b" fontFamily="poppins" maxW={700} fontSize={20} mt={10}>
        Q: {question}
      </Text>

      <Text fontFamily="poppins" fontSize={20} fontWeight={40}>
        A: {answer}
      </Text>
    </Box>
  )
}
