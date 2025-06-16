import { useAppSelector } from "@/store/hooks";
import { COLORS_LIST } from "@/constants";
import { isOccupiedColor } from "@/utils";

export default function useAvailableColors() {
  const budgets = useAppSelector((state) => state.budgets);
  const pots = useAppSelector((state) => state.pots.pots);

  const budgetColors = isOccupiedColor(budgets, COLORS_LIST);
  const potColors = isOccupiedColor(pots, COLORS_LIST);

  return { budgetColors, potColors };
}
