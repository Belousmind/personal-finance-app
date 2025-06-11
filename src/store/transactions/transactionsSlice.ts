import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "@/lib/transactions";

type Transactions = {
  transactions: Transaction[];
};

const initialState: Transactions = {
  transactions: [],
};

const TransactionSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setTransactons(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    },
  },
});

export const { setTransactons } = TransactionSlice.actions;
export default TransactionSlice.reducer;
