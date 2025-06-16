"use client";

import { useAppSelector } from "@/store/hooks";
import { ROUTES } from "@/constants";
import { OverviewContainer, Chart, SavingSmall } from "@/components";

import styles from "./style.module.scss";

export default function OvervieBudgets() {
  const budgets = useAppSelector((state) => state.budgets);

  return (
    <OverviewContainer title="Budgets" href={ROUTES.BUDGETS}>
      <div className={styles["budgets-overview"]}>
        <Chart />
        <div className={styles["budgets-list"]}>
          {budgets.map((budget) => (
            <SavingSmall
              key={budget.category}
              name={budget.category}
              {...budget}
            />
          ))}
        </div>
      </div>
    </OverviewContainer>
  );
}
