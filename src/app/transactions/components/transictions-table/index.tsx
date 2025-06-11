import { TransactionType } from "@/lib/transactions";
import { Transaction } from "@/components/overviews/overvie-transactions";

import styles from "./style.module.scss";

type Props = {
  transactions: TransactionType[];
};

export default function TransactionsTable({ transactions }: Props) {
  return (
    <div>
      <div className={styles.TableHeader}>
        <span>Recipient / Sender</span>
        <span>Category</span>
        <span>Transaction Date</span>
        <span>Amount</span>
      </div>
      <div>
        {transactions.map((transaction) => (
          <Transaction key={transaction.date} {...transaction} />
        ))}
      </div>
    </div>
  );
}
