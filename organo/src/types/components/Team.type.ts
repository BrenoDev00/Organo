import { ReactNode } from "react";
import { TeamsType } from "../utils/Teams.type";
import { CollaboratorType } from "../Collaborator.type";

export interface TeamProps extends TeamsType {
  collaborators: ReactNode[] | CollaboratorType[];
  removeCollaborator: (id: string) => void;
}
