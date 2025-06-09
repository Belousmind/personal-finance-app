import Chart from "@/components/pie-chart";
import SpendingSummary from "../spending-summary";
import Budget from "../budget";

import styles from "./style.module.scss";

import data from "../../../../../data.json";
const { budgets } = data;

export default function BudgetSection() {
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
