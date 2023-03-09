import {
  Box,
  Divider,
  ListItem,
  OrderedList,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import RowText from './RowText'

export default function PriceSummary() {
  return (
    <Box>
      <Text fontSize={25} fontWeight={700}>
        TOTAL COST
      </Text>
      <Divider color="gray.400" />
      <Text fontWeight="bold">CAR RENTAL</Text>
      <OrderedList>
        <ListItem>
          <RowText noBold text1="Car Model:" text2="Lexus LC 500" />
          <UnorderedList listStyleType="none">
            <ListItem>
              <RowText noBold text1="Subtotal" text2="Rp 3.000.000" />
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
      <Text fontWeight="bold">Personal Driver</Text>
      <OrderedList>
        <ListItem>
          <RowText noBold text1="Driver Name" text2="Delvin Jason" />
          <UnorderedList listStyleType="none">
            <ListItem>
              <RowText noBold text1="Subtotal" text2="Rp 1.500.000" />
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
      <Text fontWeight="bold">Tour Guide</Text>
      <OrderedList>
        <OrderedList>
          <ListItem>
            <RowText noBold text1="Tour Guide Name" text2="Bali Tour" />
            <UnorderedList listStyleType="none">
              <ListItem>
                <RowText noBold text1="Subtotal" text2="Rp 15.000.000" />
              </ListItem>
            </UnorderedList>
          </ListItem>
        </OrderedList>
      </OrderedList>
    </Box>
  )
}
