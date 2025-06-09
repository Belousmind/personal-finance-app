import TertiatyLink from "@/components/tertiaty-link";
import formattedDate from "@/utils/format-date";
import styles from "./style.module.scss";

type Transaction = {
  avatar: string;
  name: string;
  amount: number;
  date: string;
};

type LatestSpendingProps = {
  transactions: Transaction[];
};

export default function LatestSpeding({ transactions }: LatestSpendingProps) {
  return (
    <div className={styles.latestSpeding}>
      <span className={styles.title}>Latest Spending</span>
      <TertiatyLink text="See All" href="/transactions" />
      <div className={styles.list}>
        {transactions.map((transaction, index) =>
          index < 3 ? (
            <LatestSpedingTransaction key={transaction.date} {...transaction} />
          ) : null
        )}
      </div>
    </div>
  );
}

function LatestSpedingTransaction({ avatar, name, amount, date }: Transaction) {
  return (
    <div className={styles.transaction}>
      <img src={avatar} alt={name} className={styles.transactionImage} />
      <span className={styles.transactionName}>{name}</span>
      <span className={styles.transactionAmount}>
        {`-$${Math.abs(Number(amount)).toFixed(2)}`}
      </span>
      <span className={styles.transactionDate}>{formattedDate(date)}</span>
    </div>
  );
}
