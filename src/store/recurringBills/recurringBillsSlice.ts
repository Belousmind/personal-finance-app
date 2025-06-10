import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TransactionWithSummary } from "@/lib/transactions";

type RecurringBills = {
  transactions: TransactionWithSummary[];
};

const initialState: RecurringBills = {
  transactions: [],
};

const recurringBillsSlice = createSlice({
  name: "recurringBills",
  initialState,
  reducers: {
    setRecurringBills(state, action: PayloadAction<TransactionWithSummary[]>) {
      state.transactions = action.payload;
    },
  },
});

export const { setRecurringBills } = recurringBillsSlice.actions;
export default recurringBillsSlice.reducer;
