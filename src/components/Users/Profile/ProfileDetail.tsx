import {
  Badge,
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Tr
} from '@chakra-ui/react'
import BorderlessTableData from './BorderlessTableData'
import ChangePassword from './ChangePassword'
import DeleteAccount from './DeleteAccount'
import FullfilIdentity from './FullfilIdentity'
import EditableField from './EditableField'

interface ProfileDetailProps {
  phoneNumber: string
  email: string
  nik?: string
  drivingLicense?: boolean
  isFullfilled?: boolean
}

export default function ProfileDetail({
  phoneNumber,
  email,
  nik,
  drivingLicense,
  isFullfilled
}: ProfileDetailProps) {
  return (
    <Box>
      <TableContainer>
        <Table>
          <Tbody>
            <Tr>
              <BorderlessTableData>Your Phone Number</BorderlessTableData>
              <EditableField value={phoneNumber} />
            </Tr>
            <Tr>
              <BorderlessTableData>Your Email</BorderlessTableData>
              <EditableField value={email} />
            </Tr>
            <Tr>
              <BorderlessTableData>
                Your National Identification Number
              </BorderlessTableData>
              <EditableField value={nik ?? '-'} />
            </Tr>
            <Tr>
              <BorderlessTableData>
                Your National Driving License
              </BorderlessTableData>
              <BorderlessTableData>
                {drivingLicense ? (
                  <Badge colorScheme="green">Done</Badge>
                ) : (
                  <Badge colorScheme="red">Not Uploaded</Badge>
                )}
              </BorderlessTableData>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex flexDir="column" mt={8} gap={3}>
        {!isFullfilled && <FullfilIdentity />}
        <ChangePassword />
        <DeleteAccount />
      </Flex>
    </Box>
  )
}
