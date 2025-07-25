"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import clsx from "clsx";

import { formatMonthlyLabel } from "@/utils";
import { basePath } from "@/constants";

import useReccuringBills from "./use-recurring-bills";
import { FiltersPanel, EmptyState } from "@/components";
import { staggeredItemVariants } from "@/constants";
import { m, AnimatePresence } from "framer-motion";

export default function BillsTable() {
  const {
    searchQuery,
    selectedSort,
    setSearchQuery,
    setSelectedSort,
    filteredTransactions,
  } = useReccuringBills();

  return (
    <div className={styles["bills-table"]}>
      <FiltersPanel
        searchQuery={searchQuery}
        selectedSort={selectedSort}
        onSearchChange={setSearchQuery}
        onSortChange={setSelectedSort}
      />
      <BillTableTitle />
      {filteredTransactions.length > 0 ? (
        <AnimatePresence initial={false}>
          {filteredTransactions.map((transaction, index) => (
            <BillItem
              key={`${transaction.date}_${index}`}
              index={index}
              {...transaction}
            />
          ))}
        </AnimatePresence>
      ) : (
        <EmptyState text="No recurring bills found" />
      )}
    </div>
  );
}

function BillTableTitle() {
  return (
    <div className={styles["bill-table-header"]}>
      <span className={styles["header-title"]}>Bill Title</span>
      <span className={styles["header-due-date"]}>Due Date</span>
      <span className={styles["header-amount"]}>Amount</span>
    </div>
  );
}

type BillItemProps = {
  avatar: string;
  name: string;
  date: string;
  amount: number;
  paid: boolean;
  upcoming?: boolean;
  soon: boolean;
  index: number;
};

function BillItem({
  avatar,
  name,
  date,
  amount,
  paid,
  soon,
  index,
}: BillItemProps) {
  return (
    <m.div
      custom={index}
      variants={staggeredItemVariants}
      initial="hidden"
      animate="visible"
      className={styles["bill-item"]}
    >
      <div className={styles["icon-and-title"]}>
        <Image
          src={`${basePath}${avatar}`}
          alt={name}
          className={styles["bill-icon"]}
          width={32}
          height={32}
          unoptimized
        />
        <span className={styles["bill-title"]}>{name}</span>
      </div>
      <span
        className={clsx(styles["bill-due-date"], {
          [styles["due-soon"]]: soon,
        })}
      >
        {formatMonthlyLabel(date)}
        {soon && <IconAlert />}
        {paid && <IconSuccess />}
      </span>
      <span
        className={clsx(styles["bill-amount"], {
          [styles["due-soon"]]: soon,
        })}
      >
        ${Math.abs(Number(amount)).toFixed(2)}
      </span>
    </m.div>
  );
}

function IconAlert() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.5 5C7.5 4.86739 7.55268 4.74021 7.64645 4.64645C7.74022 4.55268 7.86739 4.5 8 4.5C8.13261 4.5 8.25979 4.55268 8.35356 4.64645C8.44732 4.74021 8.5 4.86739 8.5 5V8.5C8.5 8.63261 8.44732 8.75979 8.35356 8.85355C8.25979 8.94732 8.13261 9 8 9C7.86739 9 7.74022 8.94732 7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5V5ZM8 11.5C7.85167 11.5 7.70666 11.456 7.58333 11.3736C7.45999 11.2912 7.36386 11.1741 7.30709 11.037C7.25033 10.9 7.23548 10.7492 7.26441 10.6037C7.29335 10.4582 7.36478 10.3246 7.46967 10.2197C7.57456 10.1148 7.7082 10.0434 7.85368 10.0144C7.99917 9.98547 8.14997 10.0003 8.28701 10.0571C8.42406 10.1139 8.54119 10.21 8.6236 10.3333C8.70602 10.4567 8.75 10.6017 8.75 10.75C8.75 10.9489 8.67098 11.1397 8.53033 11.2803C8.38968 11.421 8.19892 11.5 8 11.5Z"
        fill="#C94736"
      />
    </svg>
  );
}

function IconSuccess() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM10.8538 6.85375L7.35375 10.3538C7.30732 10.4002 7.25217 10.4371 7.19147 10.4623C7.13077 10.4874 7.06571 10.5004 7 10.5004C6.9343 10.5004 6.86923 10.4874 6.80853 10.4623C6.74783 10.4371 6.69269 10.4002 6.64625 10.3538L5.14625 8.85375C5.05243 8.75993 4.99972 8.63268 4.99972 8.5C4.99972 8.36732 5.05243 8.24007 5.14625 8.14625C5.24007 8.05243 5.36732 7.99972 5.5 7.99972C5.63268 7.99972 5.75993 8.05243 5.85375 8.14625L7 9.29313L10.1463 6.14625C10.1927 6.09979 10.2479 6.06294 10.3086 6.0378C10.3693 6.01266 10.4343 5.99972 10.5 5.99972C10.5657 5.99972 10.6308 6.01266 10.6915 6.0378C10.7521 6.06294 10.8073 6.09979 10.8538 6.14625C10.9002 6.1927 10.9371 6.24786 10.9622 6.30855C10.9873 6.36925 11.0003 6.4343 11.0003 6.5C11.0003 6.5657 10.9873 6.63075 10.9622 6.69145C10.9371 6.75214 10.9002 6.8073 10.8538 6.85375Z"
        fill="#277C78"
      />
    </svg>
  );
}
