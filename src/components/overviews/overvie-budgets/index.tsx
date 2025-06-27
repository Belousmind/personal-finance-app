"use client";

import { useAppSelector } from "@/store/hooks";
import { ROUTES } from "@/constants";
import {
  OverviewContainer,
  Chart,
  SavingSmall,
  EmptyState,
} from "@/components";

import styles from "./style.module.scss";

export default function OvervieBudgets() {
  const budgets = useAppSelector((state) => state.budgets).slice(0, 4);

  return (
    <OverviewContainer title="Budgets" href={ROUTES.BUDGETS}>
      <div className={styles["budgets-overview"]}>
        {budgets.length > 0 ? (
          <>
            <Chart budgets={budgets} />
            <div className={styles["budgets-list"]}>
              {budgets.map((budget) => (
                <SavingSmall
                  key={budget.category}
                  name={budget.category}
                  {...budget}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyState text="You haven’t added any budgets yet. Create one to see your spending summary here" />
        )}
      </div>
    </OverviewContainer>
  );
}
