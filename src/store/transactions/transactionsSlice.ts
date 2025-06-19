import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TransactionType } from "@/lib/transactions";

type Transactions = {
  transactions: TransactionType[];
};

const initialState: Transactions = {
  transactions: [],
};

const TransactionSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setTransactons(state, action: PayloadAction<TransactionType[]>) {
      state.transactions = action.payload;
    },
  },
});

export const { setTransactons } = TransactionSlice.actions;
export default TransactionSlice.reducer;
