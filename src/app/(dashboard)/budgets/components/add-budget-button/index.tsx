"use client";

import { useState } from "react";
import { Button, ModalBudget } from "@/components";

export default function AddBudgetButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button text="+ Add New Budget" onClick={() => setIsModalOpen(true)} />
      <ModalBudget isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
