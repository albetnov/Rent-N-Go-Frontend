import { Flex } from '@chakra-ui/react'
import { AiFillCar } from 'react-icons/ai'
import { BiMoney } from 'react-icons/bi'
import { FiCheck, FiMapPin } from 'react-icons/fi'
import useOrderWizardStore from '../../stores/orderWizard'
import Indicator from './Indicator'
import LineThrough from './LineThrough'
import OrderIcon from './OrderIcon'

const ORDER_COLORS = ['blue.600', 'pink.400', 'red.600', 'green.300']

export default function Navigation() {
  const { step } = useOrderWizardStore((state) => ({ step: state.step }))

  return (
    <Flex
      my={{ base: 12, md: 5 }}
      justifyContent="space-around"
      position="relative"
    >
      <LineThrough />
      <OrderIcon
        color={ORDER_COLORS[0]}
        Icon={FiMapPin}
        isSelected={step === 1}
      />
      <OrderIcon
        color={ORDER_COLORS[1]}
        Icon={AiFillCar}
        isSelected={step === 2}
      />
      <OrderIcon
        color={ORDER_COLORS[2]}
        Icon={BiMoney}
        isSelected={step === 3}
      />
      <OrderIcon
        color={ORDER_COLORS[3]}
        Icon={FiCheck}
        isSelected={step === 4}
      />
      <Indicator colors={ORDER_COLORS} step={step} />
    </Flex>
  )
}
