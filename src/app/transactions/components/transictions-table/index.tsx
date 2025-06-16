import { TransactionType } from "@/lib/transactions";
import { Transaction } from "@/components";

import styles from "./style.module.scss";

type Props = {
  transactions: TransactionType[];
};

export default function TransactionsTable({ transactions }: Props) {
  return (
    <div className={styles.table}>
      <div className={styles["table-header"]}>
        <span className={styles["header-recipient"]}>Recipient / Sender</span>
        <span className={styles["header-category"]}>Category</span>
        <span className={styles["header-date"]}>Transaction Date</span>
        <span className={styles["header-amount"]}>Amount</span>
      </div>
      <div className={styles["table-body"]}>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.date}
            {...transaction}
            isFullVersion={true}
          />
        ))}
      </div>
    </div>
  );
}
