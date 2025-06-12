import { useAppSelector } from "@/store/hooks";
import { categoriesList } from "@/lib/filters";
import { Budget } from "@/store/budgets/budgetsSlice";

export function useAvailableCategories() {
  const budgets = useAppSelector((state) => state.budgets);

  const usedCategories = new Set(
    budgets.map((b: Budget) => b.category.toLowerCase())
  );

  const availableCategories = categoriesList.filter(
    (category) =>
      category.value !== "All Transactions" &&
      !usedCategories.has(category.value.toLowerCase())
  );

  return availableCategories;
}
