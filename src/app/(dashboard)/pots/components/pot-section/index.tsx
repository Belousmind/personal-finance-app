"use client";

import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

import { Button, ModalPot, EmptyState } from "@/components";
import Pot from "../pot";

import styles from "./style.module.scss";

export default function PotSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pots } = useAppSelector((state) => state.pots);

  return (
    <>
      <Button text="+ Add New Pot" onClick={() => setIsModalOpen(true)} />
      <section className={styles["pots-container"]}>
        {pots.length > 0 ? (
          pots.map((pot) => <Pot key={pot.name} {...pot} />)
        ) : (
          <EmptyState text="You haven’t created any savings pots yet. Add one to start tracking your savings goals." />
        )}
      </section>

      <ModalPot isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
