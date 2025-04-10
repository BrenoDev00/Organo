import { z } from "zod";

export const collaboratorSchema = z.object({
  collaboratorID: z.string().optional(),
  collaboratorName: z
    .string()
    .min(3, "Mínimo 3 caracteres")
    .max(64, "Máximo 64 caracteres"),
  collaboratorPosition: z
    .string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres"),
  collaboratorImage: z.string().optional(),
  collaboratorTeam: z.enum(
    [
      "Programação",
      "Front-End",
      "Data Science",
      "Devops",
      "UX e Design",
      "Mobile",
      "Inovação e Gestão",
    ],
    {
      errorMap: () => ({ message: "Escolha uma opção" }),
    }
  ),
});
