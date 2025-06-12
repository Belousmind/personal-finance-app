import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export type Budget = {
  category: string;
  total: number;
  maximum: number;
  theme: string;
  remaining: number;
  transactions: Transaction[];
};

type EditBudgetPayload = {
  category: string;
  maximum: number;
  theme: string;
  transactions: Transaction[];
};

type SetBudgetsPayload = {
  budgets: Omit<Budget, "total" | "transactions">[];
  transactions: Transaction[];
};

const initialState: Budget[] = [];

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

      const relatedTransactions = transactions.filter(
        (t) => t.category === category && t.amount < 0
      );

      const total = relatedTransactions.reduce((acc, tx) => acc + tx.amount, 0);
      const remaining = Math.max(maximum - Math.abs(total), 0);

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
      const { category, maximum, theme, transactions } = action.payload;

      const relatedTransactions = transactions.filter(
        (t) => t.category === category && t.amount < 0
      );

      const total = relatedTransactions.reduce((acc, tx) => acc + tx.amount, 0);
      const remaining = Math.max(maximum - Math.abs(total), 0);

      return state.map((budget) =>
        budget.category === category
          ? {
              ...budget,
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

export const { setBudgets, removeBudget, addBudget, editBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
