import styles from "./styles.module.scss";

// `${count} ($${formatted})`;

export default function Summary() {

  return (
    <div className={styles.summaryWrapper}>
      <span className={styles.summaryTitle}>Summary</span>

      <span className={styles.summaryItem}>
        Paid Bills
        {/* <span className={styles.itemSum}>{paidBillsText}</span> */}
      </span>

      <span className={styles.summaryItem}>
        Total Upcoming
        {/* <span className={styles.itemSum}>{upcomingText}</span> */}
      </span>

      <span className={styles.summaryItem}>
        Due Soon
        {/* <span className={styles.itemSum}>{dueSoonText}</span> */}
      </span>
    </div>
  );
}
