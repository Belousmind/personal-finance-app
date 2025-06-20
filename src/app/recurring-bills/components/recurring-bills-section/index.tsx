import TotallBills from "../total-bills";
import Summary from "../summary";
import BillsList from "../bills-table";

import styles from "./style.module.scss";

export default function RecurringBillsSection() {
  return (
    <section className={styles["bills-section"]}>
      <div className={styles["bills-summary"]}>
        <TotallBills />
        <Summary />
      </div>

      <BillsList />
    </section>
  );
}
