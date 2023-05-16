import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import FinalFlow from '../../components/Order/FinalFlow'
import FirstFlow from '../../components/Order/FirstFlow'
import Navigation from '../../components/Order/Navigation'
import SecondFlow from '../../components/Order/SecondFlow'
import ThirdFlow from '../../components/Order/ThirdFlow'
import useCustomBackground from '../../hooks/useCustomBackground'
import useOrderWizardStore from '../../stores/orderWizard'
import colors from '../../utils/colors'
import { callToast } from '../../utils/toasts'

export default function Order() {
  useCustomBackground(colors.white)

  const { step, isCancelled, reason } = useOrderWizardStore((state) => ({
    step: state.step,
    isCancelled: state.isCancelled,
    reason: state.reason
  }))
  const navigate = useNavigate()

  useEffect(() => {
    if (isCancelled) {
      callToast('Order has been cancelled', 'error', 5500, reason!)
      navigate('/')
    }
  }, [isCancelled, reason])

  return (
    <Layout>
      <Navigation />
      <Box px={8} mt={16} mb={10}>
        {step === 1 && <FirstFlow />}
        {step === 2 && <SecondFlow />}
        {step === 3 && <ThirdFlow />}
        {step === 4 && <FinalFlow />}
      </Box>
    </Layout>
  )
}
