import { CollaboratorType } from "../Collaborator.type";

export interface CardProps extends CollaboratorType {
  backgroundColor: string;
  removeCollaborator: (id: string) => void;
}
