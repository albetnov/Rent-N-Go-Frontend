import {
  Button,
  FormControl,
  type FormControlProps,
  FormErrorMessage,
  FormLabel,
  type FormLabelProps,
  Input,
  InputGroup,
  type InputProps,
  InputRightElement
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface PasswordInputProps {
  FormControlProps?: FormControlProps
  FormLabelProps?: FormLabelProps
  InputProps?: InputProps
  title?: string
  error?: string
}

export default function PasswordInput(props: PasswordInputProps) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow((prev) => !prev)
  }

  return (
    <FormControl
      {...props.FormControlProps}
      mb={7}
      isInvalid={typeof props.error === 'undefined'}
    >
      <FormLabel {...props.FormLabelProps}>
        {props.title ?? 'Password'}
      </FormLabel>
      <InputGroup size="md">
        <Input
          {...props.InputProps}
          border="1px solid"
          borderColor="input-border"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" bg="none" onClick={handleClick}>
            {show ? <FiEye /> : <FiEyeOff />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <FormErrorMessage>{props.error}</FormErrorMessage>}
    </FormControl>
  )
}
