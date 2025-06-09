"use client";
import { useAppSelector } from "@/store/hooks";
import OverviewContainer from "../overview-container";
import Chart from "@/components/pie-chart";
import SavingSmall from "../../saving-small";

import styles from "./style.module.scss";

export default function OvervieBudgets() {
  const budgets = useAppSelector((state) => state.budgets);

  return (
    <OverviewContainer title="Budgets" href="/budgets">
      <div className={styles.budgetsOverview}>
        <Chart />
        <div className={styles.budgetsList}>
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
