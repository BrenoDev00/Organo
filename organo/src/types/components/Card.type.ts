import { Collaborator } from "../Collaborator.type";

export interface CardProps extends Collaborator {
  backgroundColor: string;
  removeCollaborator: (id: string) => void;
}
