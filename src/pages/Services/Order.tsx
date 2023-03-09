import { Box, Button } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import FirstFlow from '../../components/Order/FirstFlow'
import Navigation from '../../components/Order/Navigation'
import useOrderWizardStore from '../../stores/orderWizard'
import { callToast } from '../../utils/toasts'

export default function Order() {
  const { step, hasOrder, order, done, dec, inc } = useOrderWizardStore(
    (state) => ({
      step: state.step,
      hasOrder: state.hasOrder,
      order: state.enableOrder,
      done: state.doneOrder,
      dec: state.dec,
      inc: state.inc
    })
  )

  const onOrderEnabled = () => {
    order()
    callToast('Order Enabled')
  }

  const onOrderDisabled = () => {
    done()
    callToast('Order Disabled')
  }

  return (
    <Layout>
      <Navigation />
      <Box px={8} mt={16} mb={10}>
        <FirstFlow step={step} />
      </Box>
      {hasOrder ? (
        <Box mt={14}>
          <Button onClick={onOrderDisabled}>Disable Order</Button>
          {step !== 1 && <Button onClick={dec}>Previous</Button>}
          {step !== 4 && <Button onClick={inc}>Next</Button>}
        </Box>
      ) : (
        <Button mt={5} onClick={onOrderEnabled}>
          Enable Order
        </Button>
      )}
    </Layout>
  )
}
