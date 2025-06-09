import styles from "./style.module.scss";

export default function TotallBills({ total }: { total: number }) {
  return (
    <div className={styles.billSummary}>
      {/* <img className={styles.billIcon} src="/" alt="Bill Icon" /> */}
      <span className={styles.billLabel}>Total bills</span>
      <span className={styles.billAmount}>${total.toFixed(2)}</span>
    </div>
  );
}
