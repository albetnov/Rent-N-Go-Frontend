import { Box, Flex, Image } from '@chakra-ui/react'
import WhiteText from '../WhiteText'
import BoldText from './BoldText'

export default function Contact() {
  return (
    <Box
      position="absolute"
      top={7}
      left={10}
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Image src="/logo.webp" width="272px" />
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
      >
        <WhiteText noOfLines={3}>
          <BoldText>Address:</BoldText> Digital Park, Sambau, Kecamatan Nongsa,
          Kota Batam, Kepulauan Riau 29466
        </WhiteText>
        <Box>
          <WhiteText fontSize={20} fontWeight={700}>
            0821-9999-9999
          </WhiteText>
          <WhiteText fontSize={20} fontWeight={700}>
            0811-9999-9999
          </WhiteText>
        </Box>
        <Box>
          <WhiteText>
            <BoldText>Email: </BoldText> cs@rentngo.com
          </WhiteText>
          <WhiteText>
            <BoldText>Instagram: </BoldText>
            rentngo_batam
          </WhiteText>
          <WhiteText>
            <BoldText>Twitter: </BoldText>
            rentngo_batam
          </WhiteText>
        </Box>
      </Flex>
    </Box>
  )
}
