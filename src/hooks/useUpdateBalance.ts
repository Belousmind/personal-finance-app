import { useState, ChangeEvent } from "react";

export default function useUpdateBalance(
  pot: { total: number; target: number },
  mode: "add" | "withdraw"
) {
  const [inputValue, setInputValue] = useState("");

  const numericAmount = parseFloat(inputValue);
  const isValidNumber = !isNaN(numericAmount) && numericAmount > 0;

  const maxAdd = pot.target - pot.total;
  const maxWithdraw = pot.total;

  const exceeded =
    (mode === "withdraw" && numericAmount > maxWithdraw) ||
    (mode === "add" && numericAmount > maxAdd);

  const safeAmount = isValidNumber && !exceeded ? numericAmount : 0;
  const newTotal =
    mode === "withdraw" ? pot.total - safeAmount : pot.total + safeAmount;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    handleChange,
    isValidNumber,
    exceeded,
    safeAmount,
    newTotal,
  };
}
