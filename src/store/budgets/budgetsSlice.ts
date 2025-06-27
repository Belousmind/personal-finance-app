import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateBudgetStats } from "@/utils";

import type {
  Transaction,
  EditBudgetPayload,
  SetBudgetsPayload,
  BudgetState,
} from "./type";

const initialState: BudgetState = {
  budgets: [],
  isLoading: true,
};

const budgetSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    setBudgets: (state, action: PayloadAction<SetBudgetsPayload>) => {
      const { budgets, transactions } = action.payload;

      state.budgets = budgets.map((budget) => {
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

      state.isLoading = false;
    },
    removeBudget: (state, action: PayloadAction<string>) => {
      state.budgets = state.budgets.filter(
        (budget) => budget.category !== action.payload
      );
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

      const exists = state.budgets.some((b) => b.category === category);
      if (exists) return;

      const { relatedTransactions, total, remaining } = calculateBudgetStats(
        category,
        maximum,
        transactions
      );

      state.budgets.push({
        category,
        maximum,
        theme,
        total,
        remaining,
        transactions: relatedTransactions,
      });
    },
    editBudget: (state, action: PayloadAction<EditBudgetPayload>) => {
      const { originalCategory, category, maximum, theme, transactions } =
        action.payload;

      const { relatedTransactions, total, remaining } = calculateBudgetStats(
        category,
        maximum,
        transactions
      );

      state.budgets = state.budgets.map((budget) =>
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
