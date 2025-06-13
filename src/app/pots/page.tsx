"use client";

import { useAppSelector } from "@/store/hooks";

import { MainContent, Button } from "@/components";
import Pot from "./components/pot";
import ModalPot from "@/components/modal/modal-pot";

import styles from "./style.module.scss";
import { useState } from "react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { pots } = useAppSelector((state) => state.pots);

  return (
    <MainContent text="Pots">
      <Button text="+ Add New Pot" onClick={() => setIsModalOpen(true)} />
      <section className={styles.potsContainer}>
        {pots.map((pot) => (
          <Pot key={pot.name} {...pot} />
        ))}
      </section>

      <ModalPot isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </MainContent>
  );
}
