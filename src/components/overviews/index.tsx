import styles from "./style.module.scss";

import BalanceSummary from "../balance-summary";
import OverviewPots from "./overview-pots";
import OvervieBudgets from "./overvie-budgets";
import OvervieTransactions from "./overvie-transactions";
import OvervieRecurringBills from "./overvie-recurring-bills";

export default function OverviewSection() {
  return (
    <section className={styles.overviewSection}>
      <BalanceSummary />
      <Overviews />
    </section>
  );
}

function Overviews() {
  return (
    <section className={styles.overview}>
      <div className={styles.leftColumn}>
        <OverviewPots />
        <OvervieTransactions />
      </div>
      <div className={styles.rightColumn}>
        <OvervieBudgets />
        <OvervieRecurringBills />
      </div>
    </section>
  );
}
