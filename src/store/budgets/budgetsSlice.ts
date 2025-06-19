import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateBudgetStats } from "@/utils";

import type {
  Transaction,
  Budget,
  EditBudgetPayload,
  SetBudgetsPayload,
} from "./type";

const initialState: Budget[] = [];

const budgetSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    setBudgets: (state, action: PayloadAction<SetBudgetsPayload>) => {
      const { budgets, transactions } = action.payload;

      return budgets.map((budget) => {
        const { relatedTransactions, total, remaining } = calculateBudgetStats(
          budget.category,
          budget.maximum,
          transactions
        );

        return {
          ...budget,
          total,
          remaining,
          transactions: relatedTransactions,
        };
      });
    },
    removeBudget: (state, action: PayloadAction<string>) => {
      return state.filter((budget) => budget.category !== action.payload);
    },
    addBudget: (
      state,
      action: PayloadAction<{
        category: string;
        maximum: number;
        theme: string;
        transactions: Transaction[];
      }>
    ) => {
      const { category, maximum, theme, transactions } = action.payload;

      const exists = state.some((b) => b.category === category);
      if (exists) return state;

      const { relatedTransactions, total, remaining } = calculateBudgetStats(
        category,
        maximum,
        transactions
      );

      const newBudget: Budget = {
        category,
        maximum,
        theme,
        total,
        remaining,
        transactions: relatedTransactions,
      };

      state.push(newBudget);
    },
    editBudget: (state, action: PayloadAction<EditBudgetPayload>) => {
      const { originalCategory, category, maximum, theme, transactions } =
        action.payload;

      const { relatedTransactions, total, remaining } = calculateBudgetStats(
        category,
        maximum,
        transactions
      );

      return state.map((budget) =>
        budget.category === originalCategory
          ? {
              ...budget,
              category,
              maximum,
              theme,
              total,
              remaining,
              transactions: relatedTransactions,
            }
          : budget
      );
    },
  },
});

export const { setBudgets, removeBudget, addBudget, editBudget } =
  budgetSlice.actions;
export default budgetSlice.reducer;
