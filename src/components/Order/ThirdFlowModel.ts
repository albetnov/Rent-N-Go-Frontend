import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export const PAYMENT_CARDS = [
  { src: '/bca.webp', height: '100%' },
  { src: '/visa.webp', height: '100%' },
  { src: '/dana.webp', height: '100%' },
  { src: '/shopeepay.webp', height: '100%' },
  { src: '/ovo.webp', height: '90%' },
  { src: '/gopay.webp', height: '100%' }
]

export default function ThirdFlowModel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { isOpen, onClose, onOpen } = useDisclosure()

  const navigate = useNavigate()

  const paymentCallback = () => {
    const fakeUuid = uuidv4()
    localStorage.setItem('fake-uid', fakeUuid)
    navigate(`/order/process/${fakeUuid}`)
  }

  return {
    selectedIndex,
    setSelectedIndex,
    onPayClick: onOpen,
    onClose,
    isOpen,
    paymentCallback
  }
}
