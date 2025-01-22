import { Collaborator } from "../Collaborator.type";

export interface FormProps {
  onCollaboratorRegistered: (collaborator: Collaborator) => void;
  title: string;
  teams: string[];
}
