import { Box, Flex, Input, Skeleton, Text } from '@chakra-ui/react'
import ProfileNameModel from './Models/ProfileNameModel'
import ProfileEditButton from './ProfileEditButton'

interface ProfileNameProps {
  name?: string
}

export default function ProfileName({ name }: ProfileNameProps) {
  const { fontSize, isEdit, nameRef, onEditHandler } = ProfileNameModel(
    name ?? ''
  )

  const RenderByState = () => {
    if (!name) {
      return <Skeleton width={300} height={50} />
    }

    if (isEdit) {
      return <Input defaultValue={name} ref={nameRef} />
    }

    return (
      <Text fontSize={{ base: 24, md: 30, lg: 51 }} fontWeight={700}>
        {name}
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
