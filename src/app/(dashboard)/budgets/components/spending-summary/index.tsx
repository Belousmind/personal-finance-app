import type { Budget } from "@/store/budgets/type";
import SpendingItem from "../spending-item";
import styles from "./style.module.scss";

type SpendingSummaryProps = {
  budgets: Budget[];
};

export default function SpendingSummary({ budgets }: SpendingSummaryProps) {
  return (
    <div className={styles["spending-summary"]}>
      <span className={styles.title}>Spending Summary</span>
      <div>
        {budgets.map((budget) => (
          <SpendingItem key={budget.category} {...budget} />
        ))}
      </div>
    </div>
  );
}
