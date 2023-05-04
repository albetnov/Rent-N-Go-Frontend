import {
  InputGroup,
  InputLeftElement,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react'
import { useState, type KeyboardEvent } from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  onSearch: (text: string) => Promise<void>
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [isLoading, setIsLoading] = useState(false)

  const onSearchEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsLoading(true)
      await onSearch(e.currentTarget.value)
      setIsLoading(false)
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <InputGroup maxW={670} boxShadow="2xl">
          <InputLeftElement pointerEvents="none">
            <FiSearch />
          </InputLeftElement>
          <Input
            disabled={isLoading}
            onKeyDown={onSearchEnter}
            type="search"
            bgColor="white"
            placeholder="Search"
            w="full"
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent w="full" maxH={500} overflowY="auto"></PopoverContent>
    </Popover>
  )
}
