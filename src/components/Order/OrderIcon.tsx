import { Box, useBreakpointValue } from '@chakra-ui/react'
import { type IconType } from 'react-icons'
import { BsTriangleFill } from 'react-icons/bs'

interface OrderIconProps {
  color: string
  Icon: IconType
  isSelected?: boolean
}

export default function OrderIcon({ color, Icon, isSelected }: OrderIconProps) {
  const iconSize = useBreakpointValue({ base: 24, md: 48 })
  const selectedIconSize = useBreakpointValue({ base: 14, md: 24 })

  return (
    <Box
      p={{ base: 3, md: 6 }}
      rounded="full"
      border="1px solid"
      borderColor={color}
      color={color}
      position="relative"
      bg="white"
    >
      <Icon fontSize={iconSize} />
      {isSelected && (
        <BsTriangleFill
          fontSize={selectedIconSize}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            right: '50%',
            bottom: '-45%'
          }}
        />
      )}
    </Box>
  )
}
