import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { FiEdit2 } from 'react-icons/fi'
import ProfileNameModel from './Models/ProfileNameModel'

interface ProfileNameProps {
  name: string
}

export default function ProfileName({ name }: ProfileNameProps) {
  const { fontSize, isEdit, nameRef, onEditHandler } = ProfileNameModel(name)

  return (
    <Box>
      <Text fontSize={20} fontWeight={400}>
        My Profile
      </Text>
      <Flex alignItems="center" gap={2}>
        {isEdit ? (
          <Input defaultValue={name} ref={nameRef} />
        ) : (
          <Text fontSize={{ base: 24, md: 30, lg: 51 }} fontWeight={700}>
            {name}
          </Text>
        )}
        <Button
          bg="none"
          rounded="full"
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none', shadow: 'inner' }}
          onClick={onEditHandler}
        >
          <FiEdit2 fontSize={fontSize} />
        </Button>
      </Flex>
    </Box>
  )
}
