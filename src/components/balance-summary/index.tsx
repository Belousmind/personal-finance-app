"use client";

import { useAppSelector } from "@/store/hooks";

import styles from "./style.module.scss";

export default function BalanceSummary() {
  
  const { current, income, expenses } = useAppSelector(
    (state) => state.balance
  );

  const balanceList = [
    { label: "Current Balance", amount: current },
    { label: "Income", amount: income },
    { label: "Expenses", amount: expenses },
  ];
  return (
    <div className={styles.stats}>
      {balanceList.map((item) => (
        <SummaryCard key={item.label} {...item} />
      ))}
    </div>
  );
}

type SummaryCardProps = {
  label: string;
  amount: number;
};

function SummaryCard({ label, amount }: SummaryCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{label}</span>
      <span className={styles.sum}>${amount.toFixed(2)}</span>
    </div>
  );
}
