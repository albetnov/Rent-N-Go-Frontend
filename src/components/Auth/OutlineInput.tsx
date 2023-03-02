import {
  FormControl,
  type FormControlProps,
  FormErrorMessage,
  FormLabel,
  type FormLabelProps,
  Input,
  type InputProps
} from '@chakra-ui/react'

interface OutlineInputProps {
  label: string
  placeholder: string
  type?: string
  FormControlProps?: FormControlProps
  FormLabelProps?: FormLabelProps
  InputProps?: InputProps
  error?: string
}

export default function OutlineInput({
  label,
  placeholder,
  type = 'text',
  FormControlProps,
  FormLabelProps,
  InputProps,
  error
}: OutlineInputProps) {
  return (
    <FormControl
      {...FormControlProps}
      isInvalid={typeof error === 'undefined'}
      mb={7}
    >
      <FormLabel {...FormLabelProps}>{label}</FormLabel>
      <Input
        {...InputProps}
        border="1px solid"
        borderColor="input-border"
        type={type}
        placeholder={placeholder}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}
