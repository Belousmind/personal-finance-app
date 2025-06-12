import { z } from "zod";

export const budgetSchema = z.object({
  category: z.string().min(1, "Category is required"),
  maximum: z.coerce.number().min(1, "Maximum must be greater than 0"),
  theme: z.string().min(1, "Theme is required"),
});

export type BudgetFormData = z.infer<typeof budgetSchema>;
