import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

type PotState = {
  totalSaved: number;
  pots: Pot[];
};

const initialState: PotState = {
  totalSaved: 0,
  pots: [],
};

const potsSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setPots: (state, action: PayloadAction<Pot[]>) => {
      state.pots = action.payload;
      state.totalSaved = action.payload.reduce(
        (acc, pot) => acc + pot.total,
        0
      );
    },
  },
});

export const { setPots } = potsSlice.actions;
export default potsSlice.reducer;
