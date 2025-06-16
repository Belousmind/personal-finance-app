"use client";
import { useAppSelector } from "@/store/hooks";
import { formattedDate } from "@/utils";
import { ROUTES } from "@/constants";
import { OverviewContainer } from "@/components";

import styles from "./styles.module.scss";
import clsx from "clsx";

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

type TransactionProps = {
  avatar: string;
  name: string;
  amount: number;
  category: string;
  date: string;
};

export function Transaction({
  avatar,
  name,
  amount,
  category,
  date,
}: TransactionProps) {
  return (
    <div className={styles.transaction}>
      <img className={styles["transaction-image"]} src={avatar} alt={name} />
      <span className={styles["transaction-name"]}>{name}</span>
      <span className={styles["transaction-category"]}>{category}</span>
      <span
        className={clsx(styles["transaction-amount"], {
          [styles.positive]: Number(amount) > 0,
        })}
      >
        {Number(amount) > 0
          ? `+$${Number(amount).toFixed(2)}`
          : `-$${Math.abs(Number(amount)).toFixed(2)}`}
      </span>
      <span className={styles["transaction-date"]}>{formattedDate(date)}</span>
    </div>
  );
}
