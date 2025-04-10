import { CollaboratorType } from "../Collaborator.type";

export interface CardProps extends Omit<CollaboratorType, "collaboratorTeam"> {
  backgroundColor: string | undefined;
  removeCollaborator: (id: string) => void;
}
