import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { categoriesList, sortingList } from "@/lib/filters";

export function useFilteredTransactions() {
  
  const transactions = useAppSelector(
    (state) => state.transactions.transactions
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);
  const [selectedSort, setSelectedSort] = useState(sortingList[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredTransactions = transactions
    .filter((t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((t) =>
      selectedCategory.value === "All Transactions"
        ? true
        : t.category === selectedCategory.value
    )
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
          return b.amount - a.amount;
        case "lowest":
          return a.amount - b.amount;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages]);

  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    searchQuery,
    selectedCategory,
    selectedSort,
    currentPage,
    totalPages,
    currentTransactions,
    setSearchQuery,
    setSelectedCategory,
    setSelectedSort,
    setCurrentPage,
  };
}
