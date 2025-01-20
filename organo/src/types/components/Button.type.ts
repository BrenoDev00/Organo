export interface ButtonProps {
  onClick?: () => void;
  variant?: string;
  type: "submit" | "reset" | "button";
  title: string;
}
