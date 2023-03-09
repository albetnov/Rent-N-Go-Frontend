import { Card, CardBody, CardHeader, Grid, GridItem } from '@chakra-ui/react'
import WhiteText from '../WhiteText'
import CarOrderCard from './CarOrderCard'
import OrderDetailCard from './OrderDetailCard'
import TextCombo from './TextCombo'
import { type WizardStep } from './types'

export default function SecondFlow({ step }: WizardStep) {
  if (step !== 2) {
    return <></>
  }

  return (
    <Grid templateColumns="35% 1fr" gap={14}>
      <GridItem>
        <Card rounded="xl">
          <CardHeader bg="primary" roundedTop="xl">
            <WhiteText fontWeight="bold">Booking Details</WhiteText>
          </CardHeader>
          <CardBody>
            <TextCombo
              label="Pickup Location"
              child="Batam"
              optionalChild="2023/02/01 23:00PM"
            />
            <TextCombo
              label="Return Location"
              child="Batam"
              optionalChild="2023/02/01 23:00PM"
            />
            <TextCombo label="Rental Duration" child="3 Days" />
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
        </OrderDetailCard>
      </GridItem>
    </Grid>
  )
}