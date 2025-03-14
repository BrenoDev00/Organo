import { CollaboratorType } from "../Collaborator.type";

export interface CardProps extends CollaboratorType {
  backgroundColor: string | undefined;
  removeCollaborator: (id: string) => void;
}
