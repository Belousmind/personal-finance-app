"use client";

import { useDispatch } from "react-redux";
import { updateBalance } from "@/store/pots/potsSlice";
import { useUpdateBalance } from "@/hooks/useUpdateBalance";
import {InputField, Button, ProgressBar} from '@/components'
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
  onClose: () => void;
};

export default function UpdateBalanceForm({
  mode = "add",
  pot,
  onClose,
}: Props) {
  const dispatch = useDispatch();
  const isWithdraw = mode === "withdraw";

  const {
    inputValue,
    handleChange,
    isValidNumber,
    exceeded,
    newTotal,
    safeAmount,
  } = useUpdateBalance(pot, mode);

  const handleConfirm = () => {
    if (!isValidNumber || exceeded) return;
    dispatch(updateBalance({ name: pot.name, newTotal }));
    onClose();
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

      <ProgressBar
        current={isWithdraw ? pot.total - safeAmount : pot.total}
        incoming={safeAmount}
        target={pot.target}
        isWithdraw={isWithdraw}
        exceeded={exceeded}
      />

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
