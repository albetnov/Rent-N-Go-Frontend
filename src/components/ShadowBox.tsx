import { Box, type BoxProps } from '@chakra-ui/react'

export default function ShadowBox(props: BoxProps) {
  return <Box {...props} mx="auto" w="full" maxW="8xl" boxShadow="dark-lg" />
}
