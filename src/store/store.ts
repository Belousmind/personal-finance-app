import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "@/store/balance/balanceSlice";
import transactionsReducer from "@/store/transactions/transactionsSlice";
import potsReducer from "@/store/pots/potsSlice";
import budgetsReducer from "@/store/budgets/budgetsSlice";
import recurringBillsReducer from "@/store/recurringBills/recurringBillsSlice";

import { saveToLocalStorage } from "@/utils";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transactions: transactionsReducer,
    pots: potsReducer,
    budgets: budgetsReducer,
    recurringBills: recurringBillsReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();

  saveToLocalStorage("pots", state.pots.pots);
  saveToLocalStorage("budgets", state.budgets);
  saveToLocalStorage("transactions", state.transactions.transactions);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
