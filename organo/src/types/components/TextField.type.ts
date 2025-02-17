import { UseFormRegisterReturn } from "react-hook-form";

export interface TextFieldProps {
  for: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  register: UseFormRegisterReturn;
}
