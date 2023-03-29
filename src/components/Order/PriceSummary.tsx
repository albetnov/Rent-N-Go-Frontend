import {
  Box,
  Divider,
  ListItem,
  OrderedList,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import RowText from './RowText'

interface GenericServiceProps {
  name: string
  price: number
}

interface PriceSummaryProps {
  car: GenericServiceProps
  driver?: GenericServiceProps
  tour?: GenericServiceProps
  duration: number
}

export default function PriceSummary({
  car,
  driver,
  tour,
  duration
}: PriceSummaryProps) {
  return (
    <Box>
      <Text fontSize={25} fontWeight={700}>
        TOTAL COST
      </Text>
      <Divider color="gray.400" />
      <Text fontWeight="bold">CAR RENTAL</Text>
      <OrderedList>
        <ListItem>
          <RowText noBold text1="Car Model:" text2={car.name} />
          <UnorderedList listStyleType="none">
            <ListItem>
              <RowText
                noBold
                text1="Subtotal"
                text2={`Rp ${car.price * duration}`}
              />
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
      {driver && (
        <>
          <Text fontWeight="bold">Personal Driver</Text>
          <OrderedList>
            <ListItem>
              <RowText noBold text1="Driver Name" text2={driver.name} />
              <UnorderedList listStyleType="none">
                <ListItem>
                  <RowText
                    noBold
                    text1="Subtotal"
                    text2={`Rp ${driver.price * duration}`}
                  />
                </ListItem>
              </UnorderedList>
            </ListItem>
          </OrderedList>
        </>
      )}
      {tour && (
        <>
          <Text fontWeight="bold">Tour Guide</Text>
          <OrderedList>
            <OrderedList>
              <ListItem>
                <RowText noBold text1="Tour Guide Name" text2={tour.name} />
                <UnorderedList listStyleType="none">
                  <ListItem>
                    <RowText
                      noBold
                      text1="Subtotal"
                      text2={`Rp. ${tour.price * duration}`}
                    />
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
          </OrderedList>
        </>
      )}
    </Box>
  )
}
