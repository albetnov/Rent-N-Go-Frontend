import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { FiEdit2 } from 'react-icons/fi'

interface ProfileNameProps {
  name: string
}

export default function ProfileName({ name }: ProfileNameProps) {
  const fontSize = useBreakpointValue({ base: 10, md: 20, lg: 30 })

  return (
    <Box>
      <Text fontSize={20} fontWeight={400}>
        My Profile
      </Text>
      <Flex alignItems="center" gap={2}>
        <Text fontSize={{ base: 24, md: 30, lg: 51 }} fontWeight={700}>
          {name}
        </Text>
        <Button
          bg="none"
          rounded="full"
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none', shadow: 'inner' }}
        >
          <FiEdit2 fontSize={fontSize} />
        </Button>
      </Flex>
    </Box>
  )
}
