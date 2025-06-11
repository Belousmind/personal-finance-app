import { AppDispatch } from "./store";
import { setBalance } from "./balance/balanceSlice";
import { setPots } from "./pots/potsSlice";
import { setBudgets } from "./budgets/budgetsSlice";
import { setRecurringBills } from "./recurringBills/recurringBillsSlice";
import { setTransactons } from "./transactions/transactionsSlice";

import { isRecurring, getStatus } from "@/lib/transactions";

import data from "../../data.json";

export const initApp = () => (dispatch: AppDispatch) => {
  dispatch(setBalance(data.balance));
  dispatch(setPots(data.pots));
  dispatch(
    setBudgets({
      budgets: data.budgets,
      transactions: data.transactions,
    })
  );
  dispatch(setTransactons(data.transactions));

  if (typeof window !== "undefined") {
    const recurring = isRecurring(data.transactions);
    const status = getStatus(new Date(), recurring);
    dispatch(setRecurringBills(status));
  }
};
