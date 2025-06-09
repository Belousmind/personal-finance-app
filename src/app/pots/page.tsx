"use client";

import { useState } from "react";
import Modal from "@/components/modal";

import MainContent from "@/components/main-content";
import ColorTitle from "@/components/color-title";
import Button from "@/components/button";
import getPercentage from "@/utils/get-percentage";
import { formatUSD } from "@/utils/format-сurrency";

import styles from "./style.module.scss";

import data from "../../../data.json";

const { pots } = data;

export default function Page() {
  return (
    <MainContent text="Pots">
      <div className={styles.potsContainer}>
        {pots.map((pot) => (
          <Pot key={pot.name} {...pot} />
        ))}
      </div>
    </MainContent>
  );
}

type PotProps = {
  name: string;
  theme: string;
  total: number;
  target: number;
};

function Pot({ name, theme, total, target }: PotProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const precent = getPercentage(total, target);

  return (
    <div className={styles.pot}>
      <ColorTitle title={name} color={theme} />

      <div className={styles.potChart}>
        <span className={styles.potTotal}>Total Saved</span>
        <span className={styles.potAmount}>${total.toFixed()}</span>
        <div className={styles.potBar}>
          <div
            className={styles.potBarPrecent}
            style={{ backgroundColor: theme, width: precent }}
          ></div>
        </div>
        <span className={styles.potPrecent}>{precent}</span>
        <span className={styles.potTarget}>Target of {formatUSD(target)}</span>
      </div>

      <Button
        text="+ Add Money"
        variant="secondary"
        onClick={() => setIsModalOpen(true)}
      />
      <Button text="Withdraw" variant="secondary" />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Pot"
      >
        {<span></span>}
      </Modal>
    </div>
  );
}
