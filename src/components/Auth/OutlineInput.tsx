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
  type: string;
  FormControlProps?: FormControlProps;
  FormLabelProps?: FormLabelProps;
  InputProps?: InputProps;
}

export default function OutlineInput(props: OutlineInputProps) {
  return (
    <FormControl {...props.FormControlProps} mb={7}>
      <FormLabel {...props.FormLabelProps}>{props.label}</FormLabel>
      <Input
        {...props.InputProps}
        border="1px solid"
        borderColor="input-border"
        type={props.type}
        placeholder={props.placeholder}
      />
    </FormControl>
  );
}
