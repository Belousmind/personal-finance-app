"use client";

import styles from "./style.module.scss";

import { useSelector } from "react-redux";
import { selectSumOfRecurringBills } from "@/store/recurringBills/selectors";

export default function TotallBills() {
  const totalSum = useSelector(selectSumOfRecurringBills);

  return (
    <div className={styles.billSummary}>
      {/* <img className={styles.billIcon} src="/" alt="Bill Icon" /> */}
      <span className={styles.billLabel}>Total bills</span>
      <span className={styles.billAmount}>
        ${Math.abs(totalSum).toFixed(2)}
      </span>
    </div>
  );
}
