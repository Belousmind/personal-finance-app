"use client";
import Image from "next/image";

import styles from "./style.module.scss";

import { useSelector } from "react-redux";
import { selectSumOfRecurringBills } from "@/store/recurringBills/selectors";
import { basePath } from "@/constants";

export default function TotallBills() {
  const totalSum = useSelector(selectSumOfRecurringBills);

  return (
    <div className={styles["bill-summary"]}>
      <Image
        className={styles["bill-icon"]}
        src={`${basePath}/total-bill-icon.svg`}
        alt="Bill Icon"
        width={40}
        height={40}
        unoptimized
      />
      <div className={styles["bill-info"]}>
        <span className={styles["bill-label"]}>Total bills</span>
        <span className={styles["bill-amount"]}>
          ${Math.abs(totalSum).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
