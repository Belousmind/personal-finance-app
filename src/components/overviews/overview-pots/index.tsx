"use client";

import { useAppSelector } from "@/store/hooks";
import { OverviewContainer, SavingSmall } from "@/components";

import styles from "./style.module.scss";

export default function OverviewPots() {
  const { pots, totalSaved } = useAppSelector((state) => state.pots);

  return (
    <OverviewContainer title="Pots" href="/pots">
      <div className={styles["pots-overview"]}>
        <div className={styles["pots-total-saved"]}>
          <img src="/icon-pot.svg" alt="Pot Icon" />
          <span className={styles["saved-label"]}>Total Saved</span>
          <span className={styles["saved-sum"]}>${totalSaved.toFixed(2)}</span>
        </div>

        <div className={styles["pots-cards"]}>
          {pots.map((pot, index) =>
            index < 4 ? <SavingSmall key={pot.name} {...pot} /> : null
          )}
        </div>
      </div>
    </OverviewContainer>
  );
}
