import { Box, Text } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import FaqCard from '../../components/FAQ/FaqCard'
import BlackLogo from '../../components/FAQ/BlackLogo'
import FAQText from '../../components/FAQ/FAQText'
import FAQModel from './FAQModel'

export default function Drivers() {
  const { qna } = FAQModel()

  return (
    <Layout>
      <BlackLogo />
      <Box as="section" mt={7}>
        <FAQText>EXPLORE OUR</FAQText>
        <FAQText lineHeight={5}>FAQ SECTION</FAQText>
        <Text textAlign="center" mt={14} fontSize={20} fontWeight={40}>
          Got a question about your travel plans? Browse our comprehensive FAQs
          for answers on everything from car rental to tour guides and personal
          drivers. If you don&lsquo;t find the answer you&lsquo;re looking for,
          reach out to us on WhatsApp for further assistance.
        </Text>
      </Box>
      <Box my={{ base: 14, md: 36 }} px={{ base: 2, md: 14 }}>
        {qna.map((item) => (
          <FaqCard
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </Box>
    </Layout>
  )
}
