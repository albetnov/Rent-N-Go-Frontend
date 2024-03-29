import { Box, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useOrderWizardStore from '../../stores/orderWizard'
import CenteredText from '../CenteredText'
import Contact from '../Footer/Contact'
import checkMark from './check.json'
import Lottie from 'lottie-react'
import useAuthStore from '../../stores/auth'

export default function FinalFlow() {
  const { user } = useAuthStore((state) => ({ user: state.user }))

  const { endOrder } = useOrderWizardStore((state) => ({
    endOrder: state.doneOrder
  }))

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      endOrder()
      navigate('/')
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Box my={24} mx="auto">
      <Flex
        flexDir="column"
        alignItems="center"
        w="full"
        justifyContent="space-between"
      >
        <Box>
          <Lottie style={{ height: 140 }} animationData={checkMark} />
          <CenteredText
            fontWeight="bold"
            fontSize={{ base: 24, md: 32, lg: 45 }}
          >
            Thank you {user.name} for the payment!
          </CenteredText>
          <CenteredText
            fontWeight={400}
            fontSize={{ base: 16, md: 21, lg: 31 }}
            mt={20}
          >
            Your transaction has been completed and a receipt has been emailed
            to you. We appreciate your business and hope you&lsquo;ll consider
            using our services again in the future.
          </CenteredText>
        </Box>

        <Box mt={14}>
          <CenteredText mb={3} maxW="lg">
            If you have any questions or concerns about your purchase, please
            don&lsquo;t hesitate to contact us using the information provided
            below. Our customer service team is always happy to assist you.
          </CenteredText>
          <Contact bg="white" shadow="lg" color="black" />
        </Box>
      </Flex>
    </Box>
  )
}
