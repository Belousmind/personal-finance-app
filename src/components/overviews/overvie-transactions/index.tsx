import OverviewContainer from "../overview-container";
import styles from "./styles.module.scss";
import clsx from "clsx";
import formattedDate from "@/utils/format-date";

import data from "../../../../data.json";

const { transactions } = data;

export default function OvervieTransactions() {
  return (
    <OverviewContainer
      title="Transactions"
      href="/transactions"
      gapSize={32}
      text="View All"
    >
      <div className={styles.transactionList}>
        {transactions.map((transaction, index) =>
          index < 5 ? (
            <Transaction
              key={transaction.name}
              imgSrc={transaction.avatar}
              name={transaction.name}
              category={transaction.category}
              date={transaction.date}
              amount={transaction.amount.toFixed(2)}
            />
          ) : null
        )}
      </div>
    </OverviewContainer>
  );
}

type TransactionProps = {
  imgSrc: string;
  name: string;
  amount: string;
  category: string;
  date: string;
};

function Transaction({
  imgSrc,
  name,
  amount,
  category,
  date,
}: TransactionProps) {
  return (
    <div className={styles.transaction}>
      <img className={styles.transactionImage} src={imgSrc} alt={name} />
      <span className={styles.transactionName}>{name}</span>
      <span className={styles.transactionCategory}>{category}</span>
      <span
        className={clsx(styles.transactionAmount, {
          [styles.positive]: Number(amount) > 0,
        })}
      >
        {Number(amount) > 0
          ? `+$${Number(amount).toFixed(2)}`
          : `-$${Math.abs(Number(amount)).toFixed(2)}`}
      </span>
      <span className={styles.transactionDate}>{formattedDate(date)}</span>
    </div>
  );
}
