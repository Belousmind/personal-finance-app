import type { Budget as BudgetType } from "@/store/budgets/type";
import Budget from "../budget";
import styles from "./styles.module.scss";

type BudgetListProps = {
  budgets: BudgetType[];
};

export function BudgetList({ budgets }: BudgetListProps) {
  return (
    <div className={styles["budget-container"]}>
      {budgets.map((budget) => (
        <Budget key={budget.category} {...budget} />
      ))}
    </div>
  );
}
