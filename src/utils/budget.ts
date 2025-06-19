import type { Transaction } from "@/store/budgets/type";

export function calculateBudgetStats(
  category: string,
  maximum: number,
  transactions: Transaction[]
) {
  const relatedTransactions = transactions.filter(
    (t) => t.category === category && t.amount < 0
  );

  const total = relatedTransactions.reduce((acc, tx) => acc + tx.amount, 0);
  const remaining = Math.max(maximum - Math.abs(total), 0);

  return {
    relatedTransactions,
    total,
    remaining,
  };
}
