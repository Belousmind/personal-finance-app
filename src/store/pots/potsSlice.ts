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
    removePot: (state, action: PayloadAction<string>) => {
      state.pots = state.pots.filter((pot) => pot.name !== action.payload);
      state.totalSaved = state.pots.reduce((acc, pot) => acc + pot.total, 0);
    },
    addPot: (state, action: PayloadAction<Omit<Pot, "total">>) => {
      state.pots.push({ ...action.payload, total: 0 });
      state.totalSaved = state.pots.reduce((acc, pot) => acc + pot.total, 0);
    },
    editPot: (state, action: PayloadAction<Omit<Pot, "total">>) => {
      const index = state.pots.findIndex(
        (pot) => pot.name === action.payload.name
      );
      if (index !== -1) {
        const oldTotal = state.pots[index].total;
        state.pots[index] = { ...action.payload, total: oldTotal };
        state.totalSaved = state.pots.reduce((acc, pot) => acc + pot.total, 0);
      }
    },
  },
});

export const { setPots, removePot, addPot, editPot } = potsSlice.actions;
export default potsSlice.reducer;
