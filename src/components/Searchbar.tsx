import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
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
    <InputGroup maxW={1000} boxShadow="2xl">
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
  )
}
