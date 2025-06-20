import { formattedDate } from "@/utils";
import Image from "next/image";

import styles from "./styles.module.scss";
import clsx from "clsx";

type TransactionProps = {
  avatar: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  isFullVersion?: boolean;
};

export default function Transaction({
  avatar,
  name,
  amount,
  category,
  date,
  isFullVersion = false,
}: TransactionProps) {
  return (
    <div
      className={clsx(
        styles.transaction,
        isFullVersion && styles["full-transaction"]
      )}
    >
      <Image
        src={avatar}
        alt={name}
        className={styles["transaction-image"]}
        width={32}
        height={32}
      />
      <span
        className={clsx(
          styles["transaction-name"],
          isFullVersion && styles["full-name"]
        )}
      >
        {name}
      </span>
      <span
        className={clsx(
          styles["transaction-category"],
          isFullVersion && styles["full-category"]
        )}
      >
        {category}
      </span>
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
