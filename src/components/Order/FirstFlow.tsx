import { Box, Card, CardBody } from '@chakra-ui/react'
import firstFlowModel from './FirstFlowModel'
import OrderInput from './OrderInput'
import OrderSelect from './OrderSelect'
import OutlineButton from './OutlineButton'

export default function FirstFlow() {
  const {
    onPickupDateChange,
    onPickupLocationChange,
    onReturnDateChange,
    onReturnLocationChange,
    pickupDate,
    pickupLocation,
    returnDate,
    returnLocation,
    locations,
    onSubmit
  } = firstFlowModel()

  return (
    <Box>
      <Card
        mx="auto"
        maxW="3xl"
        w="full"
        border="1px dashed"
        bg="none"
        borderColor="violet"
      >
        <CardBody
          display="flex"
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box>
            <OrderInput
              label="Pick-Up Date/Time"
              onChange={onPickupDateChange}
              value={pickupDate}
            />
            <OrderSelect
              label="Pick-Up Location"
              onChange={onPickupLocationChange}
              value={pickupLocation}
            >
              {locations.map((location) => (
                <option value={location.nama} key={location.id}>
                  {location.nama}
                </option>
              ))}
            </OrderSelect>
          </Box>
          <Box>
            <OrderInput
              label="Return Date/Time"
              onChange={onReturnDateChange}
              value={returnDate}
            />
            <OrderSelect
              label="Return Location"
              onChange={onReturnLocationChange}
              value={returnLocation}
            >
              {locations.map((location) => (
                <option value={location.nama} key={location.id}>
                  {location.nama}
                </option>
              ))}
            </OrderSelect>
          </Box>
        </CardBody>
      </Card>
      <OutlineButton onClick={onSubmit}>Submit</OutlineButton>
    </Box>
  )
}
