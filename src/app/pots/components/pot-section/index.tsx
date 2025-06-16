"use client";

import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

import { Button, ModalPot } from "@/components";
import Pot from "../pot";

import styles from "./style.module.scss";

export default function PotSection() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pots } = useAppSelector((state) => state.pots);

  return (
    <>
      <Button text="+ Add New Pot" onClick={() => setIsModalOpen(true)} />
      <section className={styles.potsContainer}>
        {pots.map((pot) => (
          <Pot key={pot.name} {...pot} />
        ))}
      </section>

      <ModalPot isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
