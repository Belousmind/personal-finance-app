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

type SpendingItemProps = {
  theme: string;
  category: string;
  amount?: number;
  maximum: number;
};

function SpendingItem({ theme, category, maximum }: SpendingItemProps) {
  return (
    <div className={styles.spending}>
      <div
        className={styles.spendingColor}
        style={{ backgroundColor: theme }}
      ></div>
      <span className={styles.spendingTitle}>{category}</span>
      <span className={styles.spendingAmount}>${20.0}</span>
      <span className={styles.spendingMaximum}>of ${maximum.toFixed(2)}</span>
    </div>
  );
}
