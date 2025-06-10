import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "@/store/balance/balanceSlice";
import transactionsReducer from "@/store/transactions/transactionsSlice";
import potsReducer from "@/store/pots/potsSlice";
import budgetsReducer from "@/store/budgets/budgetsSlice";
import recurringBillsReducer from "@/store/recurringBills/recurringBillsSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transactions: transactionsReducer,
    pots: potsReducer,
    budgets: budgetsReducer,
    recurringBills: recurringBillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
