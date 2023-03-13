import { Box, Button, Image } from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import ProfilePictureModel from './Models/ProfilePictureModel'

interface ProfilePictureProps {
  imgUrl: string
  fetcher: () => Promise<void>
}

export default function ProfilePicture({
  imgUrl,
  fetcher
}: ProfilePictureProps) {
  const { newImgRef, onImageEditHandler, onFileChange } =
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
      >
        <FiEdit />
      </Button>
    </Box>
  )
}
