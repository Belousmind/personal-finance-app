"use client";

import { useState } from "react";
import { ColorTitle, Button, Modal } from "@/components";
import getPercentage from "@/utils/get-percentage";
import { formatUSD } from "@/utils/format-сurrency";
import UpdateBalance from "@/components/modal/modal-update-balance";

import styles from "./style.module.scss";

type PotProps = {
  name: string;
  theme: string;
  total: number;
  target: number;
};

export default function Pot({ name, theme, total, target }: PotProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "withdraw">("add");

  const precent = getPercentage(total, target);

  const handleOpen = (selectedMode: "add" | "withdraw") => {
    setMode(selectedMode);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const pot = { name, theme, total, target };

  return (
    <div className={styles.pot}>
      <ColorTitle category={name} color={theme} label="pot" />

      <div className={styles.potChart}>
        <span className={styles.potTotal}>Total Saved</span>
        <span className={styles.potAmount}>${total.toFixed()}</span>
        <div className={styles.potBar}>
          <div
            className={styles.potBarPrecent}
            style={{
              backgroundColor: theme,
              width: `${Math.min(precent, 100)}%`,
            }}
          ></div>
        </div>
        <span className={styles.potPrecent}>{precent.toFixed(1)}%</span>
        <span className={styles.potTarget}>Target of {formatUSD(target)}</span>
      </div>

      <Button
        text="+ Add Money"
        variant="secondary"
        onClick={() => handleOpen("add")}
      />
      <Button
        text="Withdraw"
        variant="secondary"
        onClick={() => handleOpen("withdraw")}
      />

      <UpdateBalance
        isOpen={isModalOpen}
        onClose={handleClose}
        pot={pot}
        mode={mode}
      />
    </div>
  );
}
