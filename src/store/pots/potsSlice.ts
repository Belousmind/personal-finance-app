import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Pot, PotState, EditPotPayload } from "./type";

function recalculateTotalSaved(pots: Pot[]): number {
  return pots.reduce((acc, pot) => acc + pot.total, 0);
}

const initialState: PotState = {
  totalSaved: 0,
  pots: [],
};

const potsSlice = createSlice({
  name: "pots",
  initialState,
  reducers: {
    setPots: (state, action: PayloadAction<Pot[]>) => {
      state.pots = action.payload;
      state.totalSaved = recalculateTotalSaved(state.pots);
    },
    removePot: (state, action: PayloadAction<string>) => {
      state.pots = state.pots.filter((pot) => pot.name !== action.payload);
      state.totalSaved = recalculateTotalSaved(state.pots);
    },
    addPot: (state, action: PayloadAction<Omit<Pot, "total">>) => {
      state.pots.push({ ...action.payload, total: 0 });
      state.totalSaved = recalculateTotalSaved(state.pots);
    },
    editPot: (state, action: PayloadAction<EditPotPayload>) => {
      const { originalName, name, target, theme } = action.payload;

      const index = state.pots.findIndex((pot) => pot.name === originalName);
      if (index !== -1) {
        const oldTotal = state.pots[index].total;
        state.pots[index] = { name, target, theme, total: oldTotal };
        state.totalSaved = recalculateTotalSaved(state.pots);
      }
    },
    updateBalance: (
      state,
      action: PayloadAction<{ name: string; newTotal: number }>
    ) => {
      const { name, newTotal } = action.payload;
      const pot = state.pots.find((p) => p.name === name);
      if (pot) {
        pot.total = newTotal;
        state.totalSaved = recalculateTotalSaved(state.pots);
      }
    },
  },
});

export const { setPots, removePot, addPot, editPot, updateBalance } =
  potsSlice.actions;
export default potsSlice.reducer;
