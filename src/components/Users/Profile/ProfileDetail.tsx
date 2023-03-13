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
import { type UserData } from '../../../pages/Users/ProfileLoader'
import { type ProfileFetcher } from './types'
import ProfileDetailModel from './Models/ProfileDetailModel'

interface ProfileDetailProps extends ProfileFetcher {
  user: UserData
}

export default function ProfileDetail({ user, fetcher }: ProfileDetailProps) {
  const { emailHandler, nikHandler, phoneNumberHandler } = ProfileDetailModel(
    user,
    fetcher
  )

  return (
    <Box>
      <TableContainer>
        <Table>
          <Tbody>
            <Tr>
              <BorderlessTableData>Your Phone Number</BorderlessTableData>
              <EditableField
                value={user.tel}
                type="number"
                callback={phoneNumberHandler}
              />
            </Tr>
            <Tr>
              <BorderlessTableData>Your Email</BorderlessTableData>
              <EditableField value={user.email} callback={emailHandler} />
            </Tr>
            <Tr>
              <BorderlessTableData>
                Your National Identification Number
              </BorderlessTableData>
              <EditableField value={user.nik ?? '-'} callback={nikHandler} />
            </Tr>
            <Tr>
              <BorderlessTableData>
                Your National Driving License
              </BorderlessTableData>
              <BorderlessTableData>
                <Badge>{user.sim}</Badge>
              </BorderlessTableData>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex flexDir="column" mt={8} gap={3}>
        {user.sim === 'Not Uploaded' && <FullfilIdentity />}
        <ChangePassword />
        <DeleteAccount />
      </Flex>
    </Box>
  )
}
