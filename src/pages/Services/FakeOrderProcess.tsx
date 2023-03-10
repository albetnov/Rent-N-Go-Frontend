import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useOrderWizardStore from '../../stores/orderWizard'
import { callToast } from '../../utils/toasts'

export default function FakeOrderProcess() {
  const { requestId } = useParams()
  const { doneOrder, finOrder } = useOrderWizardStore((state) => ({
    doneOrder: state.doneOrder,
    finOrder: state.finishThirdFlow
  }))

  const navigate = useNavigate()

  const [orderStatus, setOrderStatus] = useState('')

  const reqId = localStorage.getItem('fake-uid')

  const checkOrderStatus = () => {
    if (requestId !== reqId) {
      setOrderStatus('invalid')
    } else {
      setOrderStatus('success')
    }
  }

  useEffect(() => {
    checkOrderStatus()
  }, [])

  useEffect(() => {
    if (orderStatus !== '') {
      if (orderStatus === 'invalid') {
        callToast('Ups, order invalid.', 'error')
        doneOrder()
        navigate('/')
      } else {
        callToast('Order processed!', 'success')
        finOrder()
        navigate('/order')
      }
    }

    return () => {
      localStorage.removeItem('fake-uid')
      setOrderStatus('')
    }
  }, [orderStatus])

  return <></>
}
