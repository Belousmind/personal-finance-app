import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BalanceState = {
  current: number;
  income: number;
  expenses: number;
};

const initialState: BalanceState = {
  current: 0,
  income: 0,
  expenses: 0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<BalanceState>) => {
      return action.payload;
    },
  },
});

export const { setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
