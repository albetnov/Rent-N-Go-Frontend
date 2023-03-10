import { Button, Image, type ImageProps, Icon } from '@chakra-ui/react'
import { AiFillCheckCircle } from 'react-icons/ai'

interface PaymentCardProps extends ImageProps {
  isChecked?: boolean
}

export default function PaymentCard({ isChecked, ...props }: PaymentCardProps) {
  return (
    <Button
      bg="white"
      width="382px"
      height="184px"
      rounded="xl"
      shadow="xl"
      _hover={{}}
      flex="0 0 382px"
      position="relative"
    >
      <Image display="block" objectFit="scale-down" h="full" {...props} />
      {isChecked && (
        <Icon
          position="absolute"
          right={3}
          top={3}
          as={AiFillCheckCircle}
          color="green.500"
          fontSize={40}
        />
      )}
    </Button>
  )
}
