"use client";

import { useAppSelector } from "@/store/hooks";
import { ROUTES } from "@/constants";
import { OverviewContainer, Transaction } from "@/components";

import styles from "./styles.module.scss";

export default function OvervieTransactions() {
  const transactions = useAppSelector(
    (state) => state.transactions.transactions
  ).slice(0, 5);

  return (
    <OverviewContainer
      title="Transactions"
      href={ROUTES.TRANSACTIONS}
      gapSize={32}
      text="View All"
    >
      <div className={styles["transaction-list"]}>
        {transactions.map((transaction, index) => (
          <Transaction key={transaction.name} {...transaction} index={index} />
        ))}
      </div>
    </OverviewContainer>
  );
}
