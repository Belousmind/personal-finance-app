"use client";

import { useAppSelector } from "@/store/hooks";
import { ROUTES } from "@/constants";
import { OverviewContainer, Transaction } from "@/components";

import styles from "./styles.module.scss";

export default function OvervieTransactions() {
  const transactions = useAppSelector(
    (state) => state.transactions.transactions
  );
  return (
    <OverviewContainer
      title="Transactions"
      href={ROUTES.TRANSACTIONS}
      gapSize={32}
      text="View All"
    >
      <div className={styles["transaction-list"]}>
        {transactions.map((transaction, index) =>
          index < 5 ? (
            <Transaction key={transaction.name} {...transaction} />
          ) : null
        )}
      </div>
    </OverviewContainer>
  );
}
