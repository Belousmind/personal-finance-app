import styles from "./style.module.scss";

import BalanceSummary from "../balance-summary";
import OverviewPots from "./overview-pots";
import OvervieBudgets from "./overvie-budgets";
import OvervieTransactions from "./overvie-transactions";
import OvervieRecurringBills from "./overvie-recurring-bills";

export default function Overviews() {
  return (
    <section className={styles.overview}>
      <BalanceSummary />
      <OverviewPots />
      <OvervieBudgets />
      <OvervieTransactions />
      <OvervieRecurringBills />
    </section>
  );
}
