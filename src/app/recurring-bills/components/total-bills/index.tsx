"use client";

import styles from "./style.module.scss";

import { useSelector } from "react-redux";
import { selectSumOfRecurringBills } from "@/store/recurringBills/selectors";

export default function TotallBills() {
  const totalSum = useSelector(selectSumOfRecurringBills);

  return (
    <div className={styles["bill-summary"]}>
      <img
        className={styles["bill-icon"]}
        src="/total-bill-icon.svg"
        alt="Bill Icon"
      />
      <div className={styles['bill-info']}>
        <span className={styles["bill-label"]}>Total bills</span>
        <span className={styles["bill-amount"]}>
          ${Math.abs(totalSum).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
