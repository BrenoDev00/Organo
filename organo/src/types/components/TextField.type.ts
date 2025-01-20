export interface TextFieldProps {
  for: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  onInput: (event: string) => void;
  value: string;
}
