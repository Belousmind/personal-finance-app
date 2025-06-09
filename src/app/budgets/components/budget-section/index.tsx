"use client";
import Chart from "@/components/pie-chart";
import SpendingSummary from "../spending-summary";
import Budget from "../budget";

import styles from "./style.module.scss";
import { useAppSelector } from "@/store/hooks";

export default function BudgetSection() {
  
  const budgets = useAppSelector((state) => state.budgets);

  return (
    <section className={styles.budgetSection}>
      <div className={styles.budgetSummary}>
        <Chart />
        <SpendingSummary />
      </div>
      <div className={styles.budgetContainer}>
        {budgets.map((budget) => (
          <Budget key={budget.category} {...budget} />
        ))}
      </div>
    </section>
  );
}
