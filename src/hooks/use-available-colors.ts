import { useAppSelector } from "@/store/hooks";
import { COLORS_LIST } from "@/constants";
import { isOccupiedColor } from "@/utils";

export default function useAvailableColors() {
  const budgets = useAppSelector((state) => state.budgets.budgets);
  const pots = useAppSelector((state) => state.pots.pots);

  let budgetColors = isOccupiedColor(budgets, COLORS_LIST);
  let potColors = isOccupiedColor(pots, COLORS_LIST);

  const defaultOption = {
    label: "Select color",
    value: "#201f24",
    occupied: false,
  };

  budgetColors = [defaultOption, ...budgetColors];
  potColors = [defaultOption, ...potColors];

  return {
    budgetColors,
    potColors,
  };
}
