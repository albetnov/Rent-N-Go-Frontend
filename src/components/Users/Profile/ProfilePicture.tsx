import { Box, Button, Image } from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import ProfilePictureModel from './Models/ProfilePictureModel'
import { type ProfileFetcher } from './types'

interface ProfilePictureProps extends ProfileFetcher {
  imgUrl: string
}

export default function ProfilePicture({
  imgUrl,
  fetcher
}: ProfilePictureProps) {
  const { newImgRef, onImageEditHandler, onFileChange, isLoading } =
    ProfilePictureModel(fetcher)

  return (
    <Box position="relative" w="fit-content">
      <Image
        src={imgUrl}
        w="184px"
        h="194px"
        objectFit="scale-down"
        rounded="full"
      />
      <input type="file" hidden ref={newImgRef} onChange={onFileChange} />
      <Button
        rounded="full"
        p={3}
        shadow="lg"
        position="absolute"
        bottom={3}
        right={0}
        bg="white"
        onClick={onImageEditHandler}
        isLoading={isLoading}
      >
        <FiEdit />
      </Button>
    </Box>
  )
}
