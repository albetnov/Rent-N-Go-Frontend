import { Box, Divider } from '@chakra-ui/react'

interface IndicatorProps {
  colors: string[]
  step: number
}

export default function Indicator({ colors, step }: IndicatorProps) {
  return (
    <Box
      position="absolute"
      color="blue.600"
      width="full"
      bottom={{ base: -4, md: -8 }}
      px={1}
    >
      <Divider
        mt={-1}
        width="full"
        borderColor={colors[step - 1]}
        borderWidth="2px"
      />
    </Box>
  )
}
