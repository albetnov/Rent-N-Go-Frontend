import { Box } from '@chakra-ui/react'

export default function LineThrough() {
  return (
    <Box
      as="span"
      position="absolute"
      bottom="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width="70%"
      height="2px"
      bgColor="gray.400"
      zIndex={-1}
    />
  )
}
