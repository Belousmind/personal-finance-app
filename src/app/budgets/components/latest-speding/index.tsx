import { TertiatyLink } from "@/components";
import { formattedDate } from "@/utils";
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
    <div className={styles["latest-spending"]}>
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
      <img src={avatar} alt={name} className={styles["transaction-image"]} />
      <span className={styles["transaction-name"]}>{name}</span>
      <span className={styles["transaction-amount"]}>
        {`-$${Math.abs(Number(amount)).toFixed(2)}`}
      </span>
      <span className={styles["transaction-date"]}>{formattedDate(date)}</span>
    </div>
  );
}
