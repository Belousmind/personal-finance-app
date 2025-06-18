import { z } from "zod";

export const potSchema = z.object({
  name: z.string().min(1, "Name is required").max(30, "Max 30 characters"),
  target: z.coerce.number().min(1, "Target must be greater than 0"),
  theme: z.string().min(1, "Theme is required"),
});

export type PotFormData = z.infer<typeof potSchema>;
