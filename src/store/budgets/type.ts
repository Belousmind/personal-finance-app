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

export type EditBudgetPayload = {
  originalCategory: string;
  category: string;
  maximum: number;
  theme: string;
  transactions: Transaction[];
};

export type SetBudgetsPayload = {
  budgets: Omit<Budget, "total" | "transactions">[];
  transactions: Transaction[];
};
