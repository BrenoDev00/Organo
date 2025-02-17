export interface DropdownProps {
  label: string;
  required: boolean;
  value: string;
  onChange: (event: string) => void;
  for: string;
  options: object[] | string[];
}
