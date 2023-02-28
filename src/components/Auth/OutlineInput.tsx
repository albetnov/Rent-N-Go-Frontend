import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from "@chakra-ui/react";

interface OutlineInputProps {
  label: string;
  placeholder: string;
  type?: string;
  FormControlProps?: FormControlProps;
  FormLabelProps?: FormLabelProps;
  InputProps?: InputProps;
}

export default function OutlineInput({
  label,
  placeholder,
  type = "text",
  FormControlProps,
  FormLabelProps,
  InputProps,
}: OutlineInputProps) {
  return (
    <FormControl {...FormControlProps} mb={7}>
      <FormLabel {...FormLabelProps}>{label}</FormLabel>
      <Input
        {...InputProps}
        border="1px solid"
        borderColor="input-border"
        type={type}
        placeholder={placeholder}
      />
    </FormControl>
  );
}
