import TertiatyLink from "@/components/tertiaty-link";

import formattedDate from "@/utils/format-date";

import styles from "./style.module.scss";
import clsx from "clsx";

import data from "../../../../../data.json";

const { transactions } = data;

export default function LatestSpeding() {
  return (
    <div className={styles.latestSpeding}>
      <span className={styles.title}>Latest Spending</span>
      <TertiatyLink text="See All" href="/transactions" />
      <div className={styles.list}>
        {transactions.map((transaction, index) =>
          index < 3 ? (
            <LatestSpedingTransaction
              key={transaction.name}
              imgSrc={transaction.avatar}
              title={transaction.name}
              date={transaction.date}
              amount={transaction.amount}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

type LatestSpedingTransactionProps = {
  imgSrc: string;
  title: string;
  amount: number;
  date: string;
};

function LatestSpedingTransaction({
  imgSrc,
  title,
  amount,
  date,
}: LatestSpedingTransactionProps) {
  return (
    <div className={styles.transaction}>
      <img src={imgSrc} alt={title} className={styles.transactionImage} />
      <span className={styles.transactionName}>{title}</span>
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
