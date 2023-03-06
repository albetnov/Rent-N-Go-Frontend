import {
  InputGroup,
  InputLeftElement,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  return (
    <Popover>
      <PopoverTrigger>
        <InputGroup maxW={670} boxShadow="2xl">
          <InputLeftElement pointerEvents="none">
            <FiSearch />
          </InputLeftElement>
          <Input type="search" bgColor="white" placeholder="Search" />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent w="full" maxH={500} overflowY="auto"></PopoverContent>
    </Popover>
  )
}
