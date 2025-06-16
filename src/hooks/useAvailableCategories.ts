import { useAppSelector } from "@/store/hooks";
import { CATEGORIES_LIST } from "@/constants";
import { Budget } from "@/store/budgets/budgetsSlice";

export function useAvailableCategories() {
  const budgets = useAppSelector((state) => state.budgets);

  const usedCategories = new Set(
    budgets.map((b: Budget) => b.category.toLowerCase())
  );

  const availableCategories = CATEGORIES_LIST.filter(
    (category) =>
      category.value !== "All Transactions" &&
      !usedCategories.has(category.value.toLowerCase())
  );

  return availableCategories;
}
