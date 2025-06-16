"use client";
import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import { selectRecurringSummary } from "@/store/recurringBills/selectors";

export default function Summary() {
  const summary = useSelector(selectRecurringSummary);

  return (
    <div className={styles["summary-wrapper"]}>
      <span className={styles["summary-title"]}>Summary</span>
      {summary.map((item) => (
        <span key={item.label} className={styles["summary-item"]}>
          {item.label}
          <span className={styles["item-sum"]}>
            {item.amount} (${Math.abs(item.sum).toFixed(2)})
          </span>
        </span>
      ))}
    </div>
  );
}
