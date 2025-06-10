import data from "../../data.json";

const { transactions } = data;

type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

// нужно посчитать количество каждого типа транзакции и их суммы
// создать фильтры и поиск 

type Summary = {
  paid: boolean;
  upcoming: boolean;
  soon: boolean;
};

type TransactionWithSummary = Transaction & Summary;

function isRecurring(arr: Transaction[]) {
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

export const recurringTransactions = isRecurring(transactions);

export function getStatus(arr: Transaction[]): TransactionWithSummary[] {
  const date = new Date();
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

export const recurringBillsWithStatus = getStatus(recurringTransactions);
