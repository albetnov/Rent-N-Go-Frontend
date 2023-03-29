import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import CenteredText from '../CenteredText'
import PrimaryButton from '../PrimaryButton'
import PaymentCard from './PaymentCard'
import PriceSummary from './PriceSummary'
import ThirdFlowModel, { PAYMENT_CARDS } from './ThirdFlowModel'

export default function ThirdFlow() {
  const {
    selectedIndex,
    setSelectedIndex,
    onPayClick,
    onClose,
    isOpen,
    paymentCallback,
    item,
    duration
  } = ThirdFlowModel()

  return (
    <>
      <Modal onClose={onClose} isCentered isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Simulator (Sandbox)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CenteredText fontSize={32} fontWeight="bold">
              Welcome to Payment Simulator!
            </CenteredText>
            <CenteredText>Click the button below to pay.</CenteredText>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={paymentCallback}>
              Pay Now!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        maxW="4xl"
        w="full"
        mx="auto"
        bg="none"
        border="1px solid black"
        rounded="2xl"
      >
        <CenteredText fontWeight="bold">
          Select Your Payment Method
        </CenteredText>
        <Flex gap={7} my={3} p={3} overflowX="auto">
          {PAYMENT_CARDS.map((item, i) => (
            <PaymentCard
              key={item.src}
              src={item.src}
              height={item.height}
              isChecked={i === selectedIndex}
              onClick={() => {
                setSelectedIndex(i)
              }}
            />
          ))}
        </Flex>
        <Box p={5}>
          <PriceSummary
            duration={duration}
            car={item.car}
            driver={item.driver}
            tour={item.tour}
          />
        </Box>
        <PrimaryButton
          onClick={onPayClick}
          mx="auto"
          my={3}
          w="242px"
          display="block"
        >
          Pay
        </PrimaryButton>
      </Box>
    </>
  )
}
