import TotallBills from "../total-bills";
import Summary from "../summary";
import BillsList from "../bills-list";

import styles from './style.module.scss'

export default function RecurringBillsSection() {
  return (
    <section className={styles.billsSection}>
      <TotallBills />
      <Summary />
      <BillsList />
    </section>
  );
}
