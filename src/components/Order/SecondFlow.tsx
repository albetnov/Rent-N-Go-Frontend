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

export default function SecondFlow() {
  const {
    pickupDate,
    pickupLocation,
    rentalEstimation,
    returnDate,
    returnLocation,
    next,
    item,
    rentalDuration
  } = SecondFlowModel()

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
            imgUrl={item.car.photo}
            carModel={item.car.name}
            price={item.car.price}
            period={rentalEstimation}
            duration={rentalDuration}
          />
          {item.driver && (
            <DriverOrderCard
              imgUrl={item.driver.photo}
              name={item.driver.name}
              period={rentalEstimation}
              price={item.driver.price}
              duration={rentalDuration}
            />
          )}
          {item.tour && (
            <TourOrderCard
              imgUrl={item.tour.photo}
              name={item.tour.name}
              period={rentalEstimation}
              price={item.tour.price}
              duration={rentalDuration}
            />
          )}
          <PriceSummary
            duration={rentalDuration}
            car={item.car}
            tour={item.tour}
            driver={item.driver}
          />
        </OrderDetailCard>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <OutlineButton onClick={next}>Continue</OutlineButton>
      </GridItem>
    </Grid>
  )
}
