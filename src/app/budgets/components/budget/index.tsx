import ColorTitle from "@/components/color-title";
import SavingSmall from "@/components/saving-small";
import LatestSpeding from "../latest-speding";

import styles from "./style.module.scss";

type BudgetProps = {
  category: string;
  theme: string;
  maximum: number;
};

export default function Budget({ category, theme, maximum }: BudgetProps) {
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
            // width: precent
            style={{ backgroundColor: theme }}
          ></div>
        </div>
        <SavingSmall title="Spent" color={theme} sum="10.00" />
        <SavingSmall
          title="Remaining"
          color="#F8F4F0"
          sum={maximum.toFixed(2)}
        />
      </div>

      <LatestSpeding />
    </div>
  );
}
