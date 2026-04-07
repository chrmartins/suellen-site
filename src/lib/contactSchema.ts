import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(80, "Nome muito longo"),
  email: z.string().email("E-mail inválido").max(100, "E-mail muito longo"),
  phone: z
    .string()
    .regex(/^[\d\s()\-+]{8,20}$/, "Telefone inválido")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(1000, "Mensagem muito longa"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
