import { Td, type TableCellProps } from '@chakra-ui/react'

export default function BorderlessTableData(props: TableCellProps) {
  return <Td {...props} border="none" />
}
