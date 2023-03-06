import { Box, Text } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import FaqCard from '../../components/FAQ/Faqcard'
import BlackLogo from '../../components/FAQ/Black_logo'
import useCustomBackground from '../../hooks/useCustomBackground'
import colors from '../../utils/colors'

export default function Drivers() {
  useCustomBackground(colors.white)
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '35vh'
        }}
      >
        <BlackLogo />
      </div>
      <Box>
        <Text
          fontFamily="poppins"
          fontSize={{ base: 40, lg: 100 }}
          fontWeight={1000}
          textAlign="center"
          maxW={700}
          mx="auto"
        >
          EXPLORE OUR
        </Text>
        <Text
          fontFamily="poppins"
          fontSize={{ base: 40, lg: 100 }}
          fontWeight={1000}
          textAlign="center"
          maxW={700}
          mx="auto"
          lineHeight={5}
        >
          FAQ SECTION
        </Text>

        <br />
        <Text
          fontFamily="poppins"
          textAlign="center"
          maxW={850}
          mt="30px"
          mx="auto"
          fontSize={20}
          fontWeight={40}
        >
          Got a question about your travel plans? Browse our comprehensive FAQs
          for answers on everything from car rental to tour guides and personal
          drivers. If you don&lsquo;t find the answer you&lsquo;re looking for,
          reach out to us on WhatsApp for further assistance.
        </Text>
      </Box>
      <Box mt="150px" mb="160px">
        <Box px="60px">
          <FaqCard
            question="Q: What services does Rent and Go offer?"
            answer="A: Rent and Go offers car rental services, private driver services, and tour guide + driver
                                        services. Every car rented from Rent and Go is owned by the company."
          />
        </Box>
        <Box px="60px">
          <FaqCard
            question="Q: What types of vehicles are available for rent at Rent N Go?"
            answer="A: At Rent N Go, we offer a variety of vehicles to suit your travel needs. Our fleet includes
                        everything from economy cars to luxury SUVs. You can find more information about our
                        vehicle options on our website or by reaching out to our customer support team."
          />
        </Box>

        <Box px="60px">
          <FaqCard
            question="Q: How can I rent a car from Rent and Go?"
            answer="A: Renting a car from us is easy! Simply visit our website, select the dates and location
                                for your rental, choose a car that suits your needs, and make a reservation."
          />
        </Box>

        <Box px="60px">
          <FaqCard
            question="Q: Do you offer tour guide services?"
            answer="Yes, we do offer tour guide services. Our experienced tour guides are knowledgeable
                                about local attractions and can provide you with an immersive travel experience. If
                                you are interested in booking a tour guide, please contact our customer support team for
                                more information."
          />
        </Box>

        <Box px="60px">
          <FaqCard
            question="Q: What are the requirements for renting a car from Rent and Go?"
            answer="To rent a car from us, you must be at least 17 years old and have a valid driver
                                license. Some car models may require a minimum age of 23 years. for short, it
                                depends on the car"
          />
        </Box>
      </Box>
    </Layout>
  )
}
