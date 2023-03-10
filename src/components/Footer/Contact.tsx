import { Box, Flex, Text, type FlexProps } from '@chakra-ui/react'
import RouterLink from '../RouterLink'
import BoldText from './BoldText'

export default function Contact(props: FlexProps) {
  return (
    <>
      <Flex
        flexDir="column"
        justifyContent="space-around"
        bg="box-footer"
        py={7}
        px={8}
        mt={7}
        maxW="443px"
        gap={14}
        w="full"
        color="white"
        {...props}
      >
        <Text noOfLines={3}>
          <BoldText>Address:</BoldText> Digital Park, Sambau, Kecamatan Nongsa,
          Kota Batam, Kepulauan Riau 29466
        </Text>
        <Box>
          <Text fontSize={20} fontWeight={700}>
            0821-9999-9999
          </Text>
          <Text fontSize={20} fontWeight={700}>
            0811-9999-9999
          </Text>
        </Box>
        <Box>
          <Text>
            <BoldText>Email: </BoldText> cs@rentngo.com
          </Text>
          <Text>
            <BoldText>Instagram: </BoldText>
            rentngo_batam
          </Text>
          <Text>
            <BoldText>Twitter: </BoldText>
            rentngo_batam
          </Text>
          <Text>
            A project by{' '}
            <RouterLink to="/about/teams">Artificier Team</RouterLink>.
          </Text>
        </Box>
      </Flex>
    </>
  )
}
