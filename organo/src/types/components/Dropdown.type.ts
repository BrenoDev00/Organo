import { UseFormRegisterReturn } from "react-hook-form";

export interface DropdownProps {
  label: string;
  for: string;
  options: object[] | string[];
  register: UseFormRegisterReturn;
  dataTest?: string;
}
