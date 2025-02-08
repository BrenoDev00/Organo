import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  icon: ReactNode;
  message: string;
  children?: ReactNode;
  handleModalType: () => void;
  primaryButtonMessage: string;
  isClose: (isOpen: boolean) => void;
  secondaryButtonMessage: string;
}
