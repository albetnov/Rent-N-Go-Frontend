import {
  Checkbox,
  FormControl,
  FormLabel,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text
} from '@chakra-ui/react'
import AuthScaffold from '../../components/Auth/AuthScaffold'
import OutlineInput from '../../components/Auth/OutlineInput'
import PasswordInput from '../../components/Auth/PasswordInput'
import CenteredText from '../../components/CenteredText'
import PrimaryButton from '../../components/PrimaryButton'
import RouterLink from '../../components/RouterLink'
import RegisterModel from './RegisterModel'

export default function Register() {
  const registerModel = RegisterModel()

  return (
    <>
      <Modal
        isOpen={registerModel.isOpen}
        closeOnOverlayClick={false}
        isCentered
        onClose={registerModel.onClose}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <CenteredText fontSize={23} fontWeight={700}>
              Terms and Condition
            </CenteredText>
          </ModalHeader>
          <ModalBody>
            <OrderedList>
              <ListItem>
                Rental Requirements: The renter must have a valid driver&lsquo;s
                license, be at least 21 years old, provide a credit card or
                debit card for payment, and a security deposit.
              </ListItem>
              <ListItem>
                Rental Period: The rental period starts from the time the renter
                takes possession of the vehicle and ends when the vehicle is
                returned to Rent and Go. Late returns will incur additional
                fees. The minimum rental period is 2 day.
              </ListItem>
              <ListItem>
                Rental Rates: Renters are responsible for all charges associated
                with the rental, including fuel, tolls, parking fees, and any
                fines or tickets incurred during the rental period. Rental rates
                are subject to change without notice.
              </ListItem>
              <ListItem>
                Insurance: Rent and Go provides liability insurance coverage for
                all rented vehicles. The renter is responsible for any damage or
                loss to the rented vehicle, up to the deductible amount
                specified in the rental agreement. Personal Driver and Tour
                Guide (Please visit FAQ for more details about this)
              </ListItem>
              <ListItem>
                Services: Rent and Go offers personal driver and tour guide
                services for an additional fee. The renter must specify their
                requirements for these services at the time of reservation.
              </ListItem>
              <ListItem>
                Cancellation Policy: It is not possible to cancel the order.
                When you rent the car, you simply paid for it. The money will
                not be refunded by any means. Please make sure your <b>Child</b>{' '}
                is not able to make any purchases about this. We don&lsquo;t
                accept any reason.
              </ListItem>
              <ListItem>
                Prohibited Use: The renter may not use the rented vehicle for
                any illegal activity, towing or pushing other vehicles, or
                allowing unauthorized drivers. We not taking any fine money. You
                will be directed to the police station immeaditely.
              </ListItem>
              <ListItem>
                Vehicle Maintenance: Rent and Go provides well-maintained and
                clean vehicles. The renter is responsible for checking basic
                maintenance items during the rental period and returning the
                vehicle in the same condition as it was rented. If the renter
                broke something. Then a bill of full new car price is shall be
                eagerly awaited.
              </ListItem>
              <ListItem>
                Governing Law: These terms are governed by the laws of the
                state/country where Rent and Go is located. Disputes resolved in
                courts of the same jurisdiction.
              </ListItem>
              <ListItem>
                Indemnification: Renter holds Rent and Go harmless from any
                claims, damages, or liability.
              </ListItem>
            </OrderedList>
          </ModalBody>
          <ModalFooter flexDir="column">
            <Text>
              By renting a vehicle, using personal driver or tour guide services
              from Rent and Go, you agree to the above terms and conditions.
            </Text>

            <FormControl
              justifyContent="center"
              display="flex"
              alignItems="center"
              gap={3}
              flexDir="row"
              mt={5}
            >
              <Checkbox
                checked={registerModel.isUserAgree}
                onChange={registerModel.userIsAgreeHandler}
              />
              <FormLabel mt={2}>
                I have read and agree to the terms and condition
              </FormLabel>
            </FormControl>

            <PrimaryButton my={3} onClick={registerModel.onUserAgreeHandler}>
              Register Me
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AuthScaffold title="Register">
        <form onSubmit={registerModel.onSubmitHandler}>
          <OutlineInput
            InputProps={{
              onChange: registerModel.onFieldChangeHandler,
              name: 'name',
              value: registerModel.fields.name
            }}
            label="Name"
            placeholder="Enter your name"
          />
          <OutlineInput
            InputProps={{
              onChange: registerModel.onFieldChangeHandler,
              name: 'email',
              value: registerModel.fields.email
            }}
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
          <OutlineInput
            InputProps={{
              onChange: registerModel.onFieldChangeHandler,
              name: 'phoneNumber',
              value: registerModel.fields.phoneNumber
            }}
            type="number"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <PasswordInput
            InputProps={{
              onChange: registerModel.passwordChangeHandler,
              name: 'password',
              value: registerModel.password
            }}
          />
          <PasswordInput
            InputProps={{
              onChange: registerModel.confirmPasswordChangeHandler,
              name: 'confirmPassword',
              value: registerModel.confirmPassword
            }}
            title="Confirm Password"
          />
          <PrimaryButton w="full" type="submit">
            Register
          </PrimaryButton>
        </form>
        <CenteredText mt={5}>
          Already have an account?{' '}
          <RouterLink fontWeight="semibold" to="/auth/login">
            Login
          </RouterLink>
        </CenteredText>
      </AuthScaffold>
    </>
  )
}
