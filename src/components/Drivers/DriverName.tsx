import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

interface DriverNameProps {
  name: string
  stars: 1 | 2 | 3 | 4 | 5
}

export default function DriverName({ name, stars }: DriverNameProps) {
  const fontSize = useBreakpointValue({ base: 14, lg: 24 })

  const generateStar = () => {
    const elements = []

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        elements.push(<AiFillStar key={i} fontSize={fontSize} />)
      } else {
        elements.push(<AiOutlineStar fontSize={fontSize} key={i} />)
      }
    }

    return elements
  }

  return (
    <Flex gap={2} flexDir="column">
      <Text fontWeight={700} fontSize={fontSize}>
        {name}
      </Text>
      <Flex mb={3}>{generateStar()}</Flex>
    </Flex>
  )
}
