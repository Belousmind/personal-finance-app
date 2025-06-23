import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { SORTING_LIST } from "@/constants";

export default function useReccuringBills() {
  const transactions = useAppSelector(
    (state) => state.recurringBills.transactions
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(SORTING_LIST[0]);

  const filteredTransactions = transactions
    .filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      switch (selectedSort.value) {
        case "latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "a-z":
          return a.name.localeCompare(b.name);
        case "z-a":
          return b.name.localeCompare(a.name);
        case "highest":
          return Math.abs(b.amount) - Math.abs(a.amount);
        case "lowest":
          return Math.abs(a.amount) - Math.abs(b.amount);
        default:
          return 0;
      }
    });

  return {
    searchQuery,
    selectedSort,
    setSearchQuery,
    setSelectedSort,
    filteredTransactions,
  };
}
