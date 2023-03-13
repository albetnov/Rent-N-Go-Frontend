import { Box, Flex, Input, Text } from '@chakra-ui/react'
import { type UserData } from '../../../pages/Users/ProfileLoader'
import ProfileNameModel from './Models/ProfileNameModel'
import ProfileEditButton from './ProfileEditButton'
import { type ProfileFetcher } from './types'

interface ProfileNameProps extends ProfileFetcher {
  user: UserData
}

export default function ProfileName({ user, fetcher }: ProfileNameProps) {
  const { fontSize, isEdit, nameRef, onEditHandler } = ProfileNameModel(
    user,
    fetcher
  )

  const RenderByState = () => {
    if (isEdit) {
      return <Input defaultValue={user.name} ref={nameRef} />
    }

    return (
      <Text fontSize={{ base: 24, md: 30, lg: 51 }} fontWeight={700}>
        {user.name}
      </Text>
    )
  }

  return (
    <Box>
      <Text fontSize={20} fontWeight={400}>
        My Profile
      </Text>
      <Flex alignItems="center" gap={2}>
        <RenderByState />
        <ProfileEditButton fontSize={fontSize} onEdit={onEditHandler} />
      </Flex>
    </Box>
  )
}
