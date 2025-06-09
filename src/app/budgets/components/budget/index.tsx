import ColorTitle from "@/components/color-title";
import SavingSmall from "@/components/saving-small";
import LatestSpeding from "../latest-speding";
import getPercentage from "@/utils/get-percentage";

import styles from "./style.module.scss";

type Transaction = {
 avatar: string;
  name: string;
  amount: number;
  date: string;
};

type BudgetProps = {
  category: string;
  theme: string;
  maximum: number;
  total: number;
  remaining: number;
  transactions: Transaction[];
};

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
      <ColorTitle title={category} color={theme} />

      <div className={styles.budgetStats}>
        <span className={styles.budgetMaximum}>
          Maximum of ${maximum.toFixed(2)}
        </span>
        <div className={styles.budgetBar}>
          <div
            className={styles.budgetBarPrecent}
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
