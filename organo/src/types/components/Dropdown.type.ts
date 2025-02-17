import { UseFormRegisterReturn } from "react-hook-form";

export interface DropdownProps {
  label: string;
  required: boolean;
  for: string;
  options: object[] | string[];
  register: UseFormRegisterReturn;
}
