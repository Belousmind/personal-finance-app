"use client";

import { useState } from "react";
import InputField from "@/components/fileds/input-field";
import Button from "@/components/button";
import getPercentage from "@/utils/get-percentage";
import styles from "./styles.module.scss";

type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

type Props = {
  mode?: "add" | "withdraw";
  pot: Pot;
  onSubmit: (newTotal: number) => void;
};

export default function UpdateBalanceForm({
  mode = "add",
  pot,
  onSubmit,
}: Props) {
  const isWithdraw = mode === "withdraw";

  const [inputValue, setInputValue] = useState<string>("");

  const numericAmount = parseFloat(inputValue);
  const isValidNumber = !isNaN(numericAmount) && numericAmount > 0;

  const maxAdd = pot.target - pot.total;
  const maxWithdraw = pot.total;

  const exceeded =
    (isWithdraw && numericAmount > maxWithdraw) ||
    (!isWithdraw && numericAmount > maxAdd);

  const safeAmount = isValidNumber && !exceeded ? numericAmount : 0;

  const newTotal = isWithdraw ? pot.total - safeAmount : pot.total + safeAmount;

  const percentage = getPercentage(safeAmount, pot.target);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    if (!isValidNumber || exceeded) return;
    onSubmit(newTotal);
  };

  return (
    <div className={styles.formWrapper}>
      <p className={styles.description}>
        {isWithdraw
          ? "Reduce your savings for this goal. This action is helpful when funds need to be redirected or spent."
          : "Add money toward your savings goal. Use this when you're ready to grow your pot faster."}
      </p>

      <span className={styles.label}>New Amount</span>
      <span className={styles.newAmount}>
        {!exceeded ? `$${newTotal.toFixed(2)}` : `$${pot.total.toFixed(2)}`}
      </span>

      <div className={styles.progressWrapper}>
        <div className={styles.progressBar}>
          <div
            className={styles.currentProgress}
            style={{
              width: `${getPercentage(
                isWithdraw ? pot.total - safeAmount : pot.total,
                pot.target
              )}%`,
            }}
          ></div>
          {!exceeded && (
            <div
              className={styles.incomingProgress}
              style={{
                width: `${percentage}%`,
                backgroundColor: isWithdraw ? "#c94736" : "#597c7c",
              }}
            ></div>
          )}
        </div>

        <span
          className={`${styles.percentage} ${
            isWithdraw ? styles.red : styles.green
          } ${exceeded && styles.red}`}
        >
          {!exceeded ? `${percentage.toFixed(2)}%` : "Limit exceeded"}
        </span>
        <span className={styles.targetLabel}>
          Target of ${pot.target.toLocaleString()}
        </span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleConfirm();
        }}
        className={styles.form}
      >
        <InputField
          title={isWithdraw ? "Amount to Withdraw" : "Amount to Add"}
          placeholder=""
          type="number"
          withPrefix
          value={inputValue}
          onChange={handleChange}
        />
        <Button
          text={`Confirm ${isWithdraw ? "Withdrawal" : "Addition"}`}
          disabled={!isValidNumber || exceeded}
        />
      </form>
    </div>
  );
}
