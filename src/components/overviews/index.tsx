import styles from "./style.module.scss";

import OverviewPots from "./overview-pots";
import OvervieBudgets from "./overvie-budgets";
import OvervieTransactions from "./overvie-transactions";
import OvervieRecurringBills from "./overvie-recurring-bills";

export default function Overviews() {
  return (
    <div className={styles.overview}>
      <OverviewPots />
      <OvervieBudgets />
      <OvervieTransactions />
      <OvervieRecurringBills />
    </div>
  );
}
