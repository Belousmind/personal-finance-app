"use client";

import { useState } from "react";
import { Button, ModalPot } from "@/components";

export default function AddPotButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button text="+ Add New Pot" onClick={() => setIsModalOpen(true)} />
      <ModalPot isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
