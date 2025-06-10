export type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

type Summary = {
  paid: boolean;
  upcoming: boolean;
  soon: boolean;
};

export type TransactionWithSummary = Transaction & Summary;

export function isRecurring(arr: Transaction[]) {
  const recurringTransactions: Transaction[] = [];

  const name = new Set<string>();

  arr.forEach((transaction) => {
    if (transaction.recurring && !name.has(transaction.name)) {
      name.add(transaction.name);
      recurringTransactions.push(transaction);
    }
  });

  return recurringTransactions;
}

export function getStatus(date: Date, arr: Transaction[]): TransactionWithSummary[] {
  
  const today = date.getDate();

  return arr.map((transaction) => {
    const transactionDay = new Date(transaction.date).getDate();
    const diff = transactionDay - today;

    let paid = false;
    let soon = false;
    let upcoming = false;

    if (diff < 0) {
      paid = true;
    } else if (diff > 0 && diff <= 5) {
      soon = true;
      upcoming = true;
    } else if (diff > 5) {
      upcoming = true;
    }

    return {
      ...transaction,
      paid,
      soon,
      upcoming,
    };
  });
}