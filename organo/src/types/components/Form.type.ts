import { CollaboratorType } from "../Collaborator.type";

export interface FormProps {
  onCollaboratorRegistered: (collaborator: CollaboratorType) => void;
  title: string;
  teams: string[];
}
