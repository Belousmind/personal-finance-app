"use client";

import OverviewContainer from "../overview-container";
import SavingSmall from "../../saving-small";
import styles from "./style.module.scss";

import { useAppSelector } from "@/store/hooks";

export default function OverviewPots() {
  const { pots, totalSaved } = useAppSelector((state) => state.pots);

  return (
    <OverviewContainer title="Pots" href="/pots">
      <div className={styles.potsOverview}>
        <div className={styles.potsTotalSaved}>
          <img src="/icon-pot.svg" alt="Pot Icon" />
          <span className={styles.savedLabel}>Total Saved</span>
          <span className={styles.savedSum}>${totalSaved.toFixed(2)}</span>
        </div>

        <div className={styles.potsCards}>
          {pots.map((pot, index) =>
            index < 4 ? <SavingSmall key={pot.name} {...pot} /> : null
          )}
        </div>
      </div>
    </OverviewContainer>
  );
}
