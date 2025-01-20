import { ReactNode } from "react";

export interface TeamProps {
  collaborators: ReactNode[];
  backgroundColor: string;
  title: string;
  primaryColor: string;
  removeCollaborator: (id: string) => object;
}
