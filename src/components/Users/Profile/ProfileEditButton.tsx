import { Button } from '@chakra-ui/react'
import { FiEdit2 } from 'react-icons/fi'

interface ProfileEditButtonProps {
  onEdit: () => void
  fontSize?: number
}

export default function ProfileEditButton({
  onEdit,
  fontSize
}: ProfileEditButtonProps) {
  return (
    <Button
      bg="none"
      rounded="full"
      _hover={{ bg: 'none' }}
      _active={{ bg: 'none', shadow: 'inner' }}
      onClick={onEdit}
    >
      <FiEdit2 fontSize={fontSize} />
    </Button>
  )
}
