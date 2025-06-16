"use client";

import { useState } from "react";
import { ColorTitle, Button, UpdateBalance } from "@/components";
import { formatUSD, getPercentage } from "@/utils";

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

      <div className={styles["pot-chart"]}>
        <span className={styles["pot-total"]}>Total Saved</span>
        <span className={styles["pot-amount"]}>${total.toFixed()}</span>
        <div className={styles["pot-bar"]}>
          <div
            className={styles["pot-bar-precent"]}
            style={{
              backgroundColor: theme,
              width: `${Math.min(precent, 100)}%`,
            }}
          ></div>
        </div>
        <span className={styles["pot-precent"]}>{precent.toFixed(1)}%</span>
        <span className={styles["pot-target"]}>
          Target of {formatUSD(target)}
        </span>
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
