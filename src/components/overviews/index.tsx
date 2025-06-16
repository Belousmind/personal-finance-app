import styles from "./style.module.scss";

import {
  BalanceSummary,
  OverviewPots,
  OvervieBudgets,
  OvervieTransactions,
  OvervieRecurringBills,
} from "@/components";

export default function OverviewSection() {
  return (
    <section className={styles["overview-section"]}>
      <BalanceSummary />
      <Overviews />
    </section>
  );
}

function Overviews() {
  return (
    <section className={styles.overview}>
      <div className={styles["left-column"]}>
        <OverviewPots />
        <OvervieTransactions />
      </div>
      <div className={styles["right-column"]}>
        <OvervieBudgets />
        <OvervieRecurringBills />
      </div>
    </section>
  );
}
