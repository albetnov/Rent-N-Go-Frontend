import { Box, Divider, Flex, Text } from '@chakra-ui/react'

interface TextComboProps {
  label: string
  child: string
  optionalChild?: string
}

export default function TextCombo({
  label,
  child,
  optionalChild
}: TextComboProps) {
  return (
    <>
      <Divider borderColor="black" />
      <Flex my={5} justifyContent="space-between" alignItems="flex-start">
        <Text fontWeight="bold">{label}</Text>
        <Box>
          <Text>{child}</Text>
          {optionalChild && <Text>{optionalChild}</Text>}
        </Box>
      </Flex>
    </>
  )
}
