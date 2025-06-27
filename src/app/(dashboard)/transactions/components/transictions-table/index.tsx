import { TransactionType } from "@/lib/transactions";
import { Transaction, EmptyState } from "@/components";
import { AnimatePresence } from "framer-motion";

import styles from "./style.module.scss";

type Props = {
  transactions: TransactionType[];
};

export default function TransactionsTable({ transactions }: Props) {
  return (
    <div className={styles.table}>
      <TransactionsTableHeader />
      <div className={styles["table-body"]}>
        {transactions.length > 0 ? (
          <AnimatePresence initial={false}>
            {transactions.map((transaction, index) => (
              <Transaction
                key={`${transaction.date}_${index}`}
                index={index}
                {...transaction}
                isFullVersion={true}
              />
            ))}
          </AnimatePresence>
        ) : (
          <EmptyState text="No transactions found" />
        )}
      </div>
    </div>
  );
}

function TransactionsTableHeader() {
  return (
    <div className={styles["table-header"]}>
      <span className={styles["header-recipient"]}>Recipient / Sender</span>
      <span className={styles["header-category"]}>Category</span>
      <span className={styles["header-date"]}>Transaction Date</span>
      <span className={styles["header-amount"]}>Amount</span>
    </div>
  );
}
