export interface CardProps {
  backgroundColor: string;
  id: string;
  image: string;
  name: string;
  position: string;
  removeCollaborator: (id: string) => void;
}
