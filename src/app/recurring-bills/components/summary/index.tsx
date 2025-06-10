"use client";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import { selectRecurringSummary } from "@/store/recurringBills/selectors";

export default function Summary() {
  
  const summary = useSelector(selectRecurringSummary);

  return (
    <div className={styles.summaryWrapper}>
      <span className={styles.summaryTitle}>Summary</span>
      {summary.map((item) => (
        <span key={item.label} className={styles.summaryItem}>
          {item.label}
          <span className={styles.itemSum}>
            {item.amount} (${Math.abs(item.sum).toFixed(2)})
          </span>
        </span>
      ))}
    </div>
  );
}
