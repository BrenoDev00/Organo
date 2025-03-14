import { ReactNode } from "react";

export interface ButtonProps {
  onClick?: () => void;
  variant?: string;
  icon?: ReactNode;
  type: "submit" | "reset" | "button";
  title: string;
  dataTest?: string;
}
