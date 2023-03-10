import { Card, CardBody, CardHeader, Grid, GridItem } from '@chakra-ui/react'
import WhiteText from '../WhiteText'
import CarOrderCard from './CarOrderCard'
import DriverOrderCard from './DriverOrderCard'
import OrderDetailCard from './OrderDetailCard'
import OutlineButton from './OutlineButton'
import PriceSummary from './PriceSummary'
import SecondFlowModel from './SecondFlowModel'
import TextCombo from './TextCombo'
import TourOrderCard from './TourOrderCard'
import { type WizardStep } from './types'

export default function SecondFlow({ step }: WizardStep) {
  const {
    pickupDate,
    pickupLocation,
    rentalEstimation,
    returnDate,
    returnLocation,
    next
  } = SecondFlowModel()

  if (step !== 2) {
    return <></>
  }

  return (
    <Grid templateColumns={{ base: '1fr', md: '35% 1fr' }} gap={14}>
      <GridItem>
        <Card rounded="xl">
          <CardHeader bg="primary" roundedTop="xl">
            <WhiteText fontWeight="bold">Booking Details</WhiteText>
          </CardHeader>
          <CardBody>
            <TextCombo
              label="Pickup Location"
              child={pickupLocation}
              optionalChild={pickupDate}
            />
            <TextCombo
              label="Return Location"
              child={returnLocation}
              optionalChild={returnDate}
            />
            <TextCombo
              label="Rental Duration"
              child={`${rentalEstimation} Days`}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <OrderDetailCard>
          <CarOrderCard
            imgUrl="https://source.unsplash.com/1000x1000?car"
            carModel="Lexus LC 500"
            licenseNumber="BP 1080 AD"
            price="Rp 1.000.000/day"
            period="3 Days"
            totalCost="Rp 3.000.000"
          />
          <DriverOrderCard
            imgUrl="https://source.unsplash.com/1000x1000?driver"
            name="Delvin Jason"
            period="3 Days"
            price="Rp 500.000/day"
            totalCost="Rp 1.500.000"
          />
          <TourOrderCard
            imgUrl="https://source.unsplash.com/1000x1000?travel"
            name="Place Tour"
            period="3 Days"
            price="Rp 5.000.000/day"
            totalCost="Rp 15.000.000"
          />
          <PriceSummary />
        </OrderDetailCard>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <OutlineButton onClick={next}>Continue</OutlineButton>
      </GridItem>
    </Grid>
  )
}
