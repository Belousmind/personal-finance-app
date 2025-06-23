import { AppDispatch } from "./store";
import { setBalance } from "./balance/balanceSlice";
import { setPots } from "./pots/potsSlice";
import type { Pot } from "./pots/type";
import { setBudgets } from "./budgets/budgetsSlice";
import type { Budget } from "./budgets/type";
import { setRecurringBills } from "./recurringBills/recurringBillsSlice";
import { setTransactons } from "./transactions/transactionsSlice";
import type { TransactionType } from "@/lib/transactions";

import { isRecurring, getStatus } from "@/lib/transactions";
import { loadFromLocalStorage } from "@/utils";

import data from "../../data.json";

export const initApp = () => (dispatch: AppDispatch) => {
  const localPots = loadFromLocalStorage<Pot[]>("pots");
  const localBudgets = loadFromLocalStorage<Budget[]>("budgets");
  const localTransactions =
    loadFromLocalStorage<TransactionType[]>("transactions");

  dispatch(setBalance(data.balance));
  dispatch(setPots(localPots ?? data.pots));
  dispatch(
    setBudgets({
      budgets: localBudgets ?? data.budgets,
      transactions: localTransactions ?? data.transactions,
    })
  );
  dispatch(setTransactons(data.transactions));

  if (typeof window !== "undefined") {
    const recurring = isRecurring(data.transactions);
    const status = getStatus(new Date(), recurring);
    dispatch(setRecurringBills(status));
  }
};
