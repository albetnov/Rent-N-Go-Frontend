import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useOrderWizardStore from '../../stores/orderWizard'

export const PAYMENT_CARDS = [
  { src: '/bca.webp', name: 'BCA', height: '100%' },
  { src: '/visa.webp', name: 'VISA', height: '100%' },
  { src: '/dana.webp', name: 'DANA', height: '100%' },
  { src: '/shopeepay.webp', name: 'SHOPEE PAY', height: '100%' },
  { src: '/ovo.webp', name: 'OVO', height: '90%' },
  { src: '/gopay.webp', name: 'GOPAY', height: '100%' }
]

export default function ThirdFlowModel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { item, location } = useOrderWizardStore((state) => ({
    item: state.item!,
    location: state.getLocation!
  }))

  const navigate = useNavigate()

  const paymentCallback = () => {
    const fakeUuid = uuidv4()
    localStorage.setItem('fake-uid', fakeUuid)
    localStorage.setItem('payment_method', PAYMENT_CARDS[selectedIndex].name)
    navigate(
      `/order/process/${fakeUuid}?payment_method=${PAYMENT_CARDS[selectedIndex].name}`
    )
  }

  return {
    selectedIndex,
    setSelectedIndex,
    onPayClick: onOpen,
    onClose,
    isOpen,
    paymentCallback,
    item,
    duration: location.duration
  }
}
