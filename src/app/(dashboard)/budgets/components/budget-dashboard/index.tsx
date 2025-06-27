"use client";

import { useAppSelector } from "@/store/hooks";

import { Chart, EmptyState } from "@/components";
import SpendingSummary from "../spending-summary";
import { BudgetList } from "../budget-list";

import styles from "./style.module.scss";

export default function BudgetDashboard() {
  const { budgets, isLoading } = useAppSelector((state) => state.budgets);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (budgets.length === 0) {
    return (
      <EmptyState text="You haven’t added any budgets yet. Create one to see your spending summary here" />
    );
  }

  return (
    <section className={styles["budget-section"]}>
      <div className={styles["budget-summary"]}>
        <Chart budgets={budgets} />
        <SpendingSummary budgets={budgets} />
      </div>
      <BudgetList budgets={budgets} />
    </section>
  );
}
