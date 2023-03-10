import { Box, Flex, Input, Text } from '@chakra-ui/react'
import ProfileNameModel from './Models/ProfileNameModel'
import ProfileEditButton from './ProfileEditButton'

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
        <ProfileEditButton fontSize={fontSize} onEdit={onEditHandler} />
      </Flex>
    </Box>
  )
}
