"use client";

import SpendingSummary from "../spending-summary";
import Budget from "../budget";
import { Button, Chart, ModalBudget } from "@/components";

import { useState } from "react";
import { useAppSelector } from "@/store/hooks";


import styles from "./style.module.scss";

export default function BudgetSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const budgets = useAppSelector((state) => state.budgets);

  return (
    <>
      <Button text="+ Add New Budget" onClick={() => setIsModalOpen(true)} />
      <section className={styles["budget-section"]}>
        <div className={styles["budget-summary"]}>
          <Chart />
          <SpendingSummary />
        </div>
        <div className={styles["budget-container"]}>
          {budgets.map((budget) => (
            <Budget key={budget.category} {...budget} />
          ))}
        </div>
      </section>
      <ModalBudget isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
