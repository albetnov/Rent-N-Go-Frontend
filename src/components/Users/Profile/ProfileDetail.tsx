import { Badge, Box, Flex, Table, Tbody, Tr } from '@chakra-ui/react'
import BorderlessTableData from './BorderlessTableData'
import ChangePassword from './ChangePassword'
import DeleteAccount from './DeleteAccount'
import FullfilIdentity from './FullfilIdentity'

export default function ProfileDetail() {
  return (
    <Box>
      <Table>
        <Tbody>
          <Tr>
            <BorderlessTableData>Your Phone Number</BorderlessTableData>
            <BorderlessTableData>0812-2938-2038</BorderlessTableData>
          </Tr>
          <Tr>
            <BorderlessTableData>Your Email</BorderlessTableData>
            <BorderlessTableData>delvin@jason.com</BorderlessTableData>
          </Tr>
          <Tr>
            <BorderlessTableData>
              Your National Identification Number
            </BorderlessTableData>
            <BorderlessTableData>-</BorderlessTableData>
          </Tr>
          <Tr>
            <BorderlessTableData>
              Your National Driving License
            </BorderlessTableData>
            <BorderlessTableData>
              <Badge colorScheme="red">Not Uploaded</Badge>
            </BorderlessTableData>
          </Tr>
        </Tbody>
      </Table>
      <Flex flexDir="column" mt={8} gap={3}>
        <FullfilIdentity />
        <ChangePassword />
        <DeleteAccount />
      </Flex>
    </Box>
  )
}
