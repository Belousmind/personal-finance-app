"use client";

import { useAppSelector } from "@/store/hooks";
import SpendingItem from "../spending-item";
import styles from "./style.module.scss";

export default function SpendingSummary() {
  const budgets = useAppSelector((state) => state.budgets);

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
