"use client";
import { formattedDate } from "@/utils";
import { basePath, staggeredItemVariants } from "@/constants";
import Image from "next/image";
import { m } from "framer-motion";

import styles from "./styles.module.scss";
import clsx from "clsx";

type TransactionProps = {
  avatar: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  isFullVersion?: boolean;
  index: number;
};

export default function Transaction({
  avatar,
  name,
  amount,
  category,
  date,
  isFullVersion = false,
  index,
}: TransactionProps) {
  return (
    <m.div
      custom={index}
      variants={staggeredItemVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        styles.transaction,
        isFullVersion && styles["full-transaction"]
      )}
    >
      <Image
        src={`${basePath}${avatar}`}
        alt={name}
        className={styles["transaction-image"]}
        width={32}
        height={32}
        unoptimized
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
    </m.div>
  );
}
