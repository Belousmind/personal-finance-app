import { ColorTitle, SavingSmall } from "@/components";
import LatestSpeding from "../latest-speding";
import { getPercentage } from "@/utils";
import type {Budget as BudgetProps} from '@/store/budgets/type'

import styles from "./style.module.scss";

export default function Budget({
  category,
  theme,
  maximum,
  total,
  remaining,
  transactions,
}: BudgetProps) {
  const precent = getPercentage(Math.abs(total), maximum);

  return (
    <div className={styles.budget}>
      <ColorTitle category={category} color={theme} label="budget" />

      <div className={styles["budget-stats"]}>
        <span className={styles["budget-maximum"]}>
          Maximum of ${maximum.toFixed(2)}
        </span>
        <div className={styles["budget-bar"]}>
          <div
            className={styles["budget-bar-percent"]}
            style={{
              backgroundColor: theme,
              width: `${Math.min(precent, 100)}%`,
            }}
          ></div>
        </div>
        <SavingSmall name="Spent" theme={theme} total={total} />
        <SavingSmall name="Remaining" theme="#F8F4F0" total={remaining} />
      </div>

      <LatestSpeding transactions={transactions} />
    </div>
  );
}


