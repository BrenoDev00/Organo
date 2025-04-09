import { z } from "zod";
import { collaboratorSchema } from "../schemas/collaborator-schema";

export type CollaboratorType = z.infer<typeof collaboratorSchema>;
