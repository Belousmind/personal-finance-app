export type Transaction = {
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

export type BudgetState = {
  budgets: Budget[];
  isLoading: boolean;
};

export type EditBudgetPayload = {
  originalCategory: string;
  category: string;
  maximum: number;
  theme: string;
  transactions: Transaction[];
};

export type SetBudgetsPayload = {
  budgets: Array<{
    category: string;
    maximum: number;
    theme: string;
  }>;
  transactions: Transaction[];
};
