"use client";

import { useAppSelector } from "@/store/hooks";

import { Chart, EmptyState } from "@/components";
import SpendingSummary from "../spending-summary";
import { BudgetList } from "../budget-list";

import styles from "./style.module.scss";

export default function BudgetDashboard() {
  const budget = useAppSelector((state) => state.budgets);

  return (
    <section className={styles["budget-section"]}>
      {budget.length > 0 ? (
        <>
          <div className={styles["budget-summary"]}>
            <Chart budgets={budget} />
            <SpendingSummary budgets={budget} />
          </div>
          <BudgetList budgets={budget} />
        </>
      ) : (
        <EmptyState text="You haven’t added any budgets yet. Create one to see your spending summary here" />
      )}
    </section>
  );
}
