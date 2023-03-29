import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useOrderWizardStore from '../../stores/orderWizard'

export default function FakeOrderProcess() {
  const { requestId } = useParams()
  const query = useSearchParams()[0]
  const { doneOrder, finOrder } = useOrderWizardStore((state) => ({
    doneOrder: state.cancelOrder,
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
        doneOrder()
        navigate('/')
      } else {
        finOrder(query.get('payment_method') ?? 'BCA')
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
