"use client";

import { Pagination, FiltersPanel } from "@/components";
import TransactionsTable from "../transictions-table";
import { useFilteredTransactions } from "./useFilteredTransactions";

import styles from "./style.module.scss";

export default function TransactionsSection() {
  const {
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
  } = useFilteredTransactions();

  console.log(totalPages);

  return (
    <section className={styles.content}>
      <FiltersPanel
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSelectedSort}
      />

      <TransactionsTable transactions={currentTransactions} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
