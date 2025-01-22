import { ReactNode } from "react";
import { Teams } from "../Teams.type";
import { Collaborator } from "../Collaborator.type";

export interface TeamProps extends Teams {
  collaborators: ReactNode[] | Collaborator[];
  removeCollaborator: (id: string) => void;
}
