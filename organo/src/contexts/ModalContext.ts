import { createContext } from "react";
import { ModalContextType } from "../types/contexts/ModalContext.type";

export const ModalContext = createContext<ModalContextType | null>(null);
