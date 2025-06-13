"use client";

import SpendingSummary from "../spending-summary";
import Budget from "../budget";
import ModalBudget from "@/components/modal/modal-budget";
import { useState } from "react";

import { useAppSelector } from "@/store/hooks";
import { Button, Chart } from "@/components";

import styles from "./style.module.scss";

export default function BudgetSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const budgets = useAppSelector((state) => state.budgets);

  return (
    <>
      <Button text="+ Add New Budget" onClick={() => setIsModalOpen(true)} />
      <section className={styles.budgetSection}>
        <div className={styles.budgetSummary}>
          <Chart />
          <SpendingSummary />
        </div>
        <div className={styles.budgetContainer}>
          {budgets.map((budget) => (
            <Budget key={budget.category} {...budget} />
          ))}
        </div>
      </section>
      <ModalBudget isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
