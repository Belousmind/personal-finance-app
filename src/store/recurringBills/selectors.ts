import { RootState } from "../store";

type SummaryItem = {
  title: "paid" | "upcoming" | "soon";
  label: string;
  amount: number;
  sum: number;
};

export const selectRecurringSummary = (state: RootState): SummaryItem[] => {
  const transactions = state.recurringBills.transactions;

  const summaryMap: Record<"paid" | "upcoming" | "soon", SummaryItem> = {
    paid: { title: "paid", label: "Paid Bills", amount: 0, sum: 0 },
    upcoming: { title: "upcoming", label: "Total Upcoming", amount: 0, sum: 0 },
    soon: { title: "soon", label: "Due Soon", amount: 0, sum: 0 },
  };

  for (const t of transactions) {
    if (t.paid) {
      summaryMap.paid.amount += 1;
      summaryMap.paid.sum += t.amount;
    }
    if (t.upcoming) {
      summaryMap.upcoming.amount += 1;
      summaryMap.upcoming.sum += t.amount;
    }
    if (t.soon) {
      summaryMap.soon.amount += 1;
      summaryMap.soon.sum += t.amount;
    }
  }

  return [summaryMap.paid, summaryMap.upcoming, summaryMap.soon];
};

export const selectSumOfRecurringBills = (state: RootState) => {
  const totalSum = state.recurringBills.transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  return totalSum;
};
