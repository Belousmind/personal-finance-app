import { useAppSelector } from "@/store/hooks";
import { CATEGORIES_LIST } from "@/constants";
import { Budget } from "@/store/budgets/type";

export default function useAvailableCategories() {
  const budgets = useAppSelector((state) => state.budgets.budgets);

  const usedCategories = new Set(
    budgets.map((b: Budget) => b.category.toLowerCase())
  );

  const availableCategories = CATEGORIES_LIST.filter(
    (category) =>
      category.value !== "All Transactions" &&
      !usedCategories.has(category.value.toLowerCase())
  );

  const defaultOption = { label: "Select category", value: "" };

  return [defaultOption, ...availableCategories];
}
