import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(80, "80 caractères maximum"),
  email: z.string().email("Adresse email invalide"),
  subject: z
    .string()
    .min(4, "Le sujet doit contenir au moins 4 caractères")
    .max(120, "120 caractères maximum"),
  message: z
    .string()
    .min(20, "Votre message doit contenir au moins 20 caractères")
    .max(2000, "2000 caractères maximum"),
  honeypot: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
