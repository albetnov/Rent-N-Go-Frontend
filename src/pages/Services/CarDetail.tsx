import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text
} from '@chakra-ui/react'
import Layout from '../../components/Layout'
import OutlineCard from '../../components/Services/OutlineCard'
import { GiCarSeat, GiComputerFan } from 'react-icons/gi'
import { FiBriefcase } from 'react-icons/fi'
import IconCard from '../../components/Services/IconCard'
import TextCombo from '../../components/Order/TextCombo'
import RowText from '../../components/Order/RowText'

export default function CarDetail() {
  return (
    <Layout>
      <Grid templateColumns="70% 1fr" gap={3} px={5} py={3}>
        <GridItem>
          <OutlineCard>
            <Flex overflowX="auto" gap={5} justifyContent="center">
              <Image src="https://source.unsplash.com/500x500?games" />
            </Flex>
            <Text mt={4} fontSize={42} fontWeight="bold">
              Lexus LC 500
            </Text>
            <Text mt={2} color="green.500">
              Available For Rent
            </Text>

            <IconCard flexProps={{ mt: 3 }} Icon={GiCarSeat} text="10" />
            <IconCard Icon={FiBriefcase} text="10" />
            <IconCard Icon={GiComputerFan} text="10" />

            <Text mt={5} mb={10}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              quae laboriosam facere, suscipit culpa corrupti veniam molestiae,
              ea saepe ullam veritatis mollitia quibusdam nesciunt iste natus
              corporis, optio cum inventore?
            </Text>
          </OutlineCard>
        </GridItem>
        <GridItem display="flex" gap={3} flexDir="column">
          <OutlineCard>
            <Flex gap={3} alignItems="center">
              <Text fontWeight="bold" fontSize={27}>
                Rp 1.000.000
              </Text>
              <Text>Per Day</Text>
            </Flex>
          </OutlineCard>
          <OutlineCard>
            <Text fontWeight="bold" fontSize={27}>
              Payment Details
            </Text>
            <Box mt={5} mb={3}>
              <Text>Car rental fee per day</Text>
              <RowText text1="Lexus LC 500" text2="Rp 1.000.000" />
            </Box>
            <Box borderTop="1px solid" borderColor="gray.600" mb={3}>
              <RowText noBold text1="Car Rental Period" text2="2 Day" />
              <RowText text1="Subtotal" text2="Rp 2.000.000" />
            </Box>
            <Box borderTop="1px solid" borderColor="gray.600">
              <TextCombo label="Total Fee" child="Rp 2.000.000" />
            </Box>

            <Button
              mt={5}
              colorScheme="blue"
              fontWeight="bold"
              color="white"
              py={1}
              px={3}
              rounded="full"
            >
              Proceed to checkout
            </Button>
          </OutlineCard>
        </GridItem>
      </Grid>
    </Layout>
  )
}
