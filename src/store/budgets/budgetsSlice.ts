import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

type Budget = {
  category: string;
  total: number;
  maximum: number;
  theme: string;
  remaining: number;
  transactions: Transaction[];
};

const initialState: Budget[] = [];

type SetBudgetsPayload = {
  budgets: Omit<Budget, "total" | "transactions">[];
  transactions: Transaction[];
};

const budgetSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    setBudgets: (state, action: PayloadAction<SetBudgetsPayload>) => {
      const { budgets, transactions } = action.payload;

      return budgets.map((budget) => {
        const relatedTransactions = transactions.filter(
          (t) => t.category === budget.category && t.amount < 0
        );

        const total = relatedTransactions.reduce(
          (acc, tx) => acc + tx.amount,
          0
        );

        const remaining = Math.max(budget.maximum - Math.abs(total), 0);

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
  },
});

export const { setBudgets, removeBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
