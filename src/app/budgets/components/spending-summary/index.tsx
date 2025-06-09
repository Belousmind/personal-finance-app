import SpendingItem from "../spending-item";
import styles from "./style.module.scss";

import data from "../../../../../data.json";

const { budgets } = data;

export default function SpendingSummary() {
  return (
    <div className={styles.spendingSummary}>
      <span className={styles.title}>Spending Summary</span>
      <div>
        {budgets.map((budget) => (
          <SpendingItem key={budget.category} {...budget} />
        ))}
      </div>
    </div>
  );
}


