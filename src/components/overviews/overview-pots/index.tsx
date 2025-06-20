"use client";

import { useAppSelector } from "@/store/hooks";
import { ROUTES } from "@/constants";
import { OverviewContainer, SavingSmall } from "@/components";
import Image from "next/image";

import styles from "./style.module.scss";

export default function OverviewPots() {
  const { pots, totalSaved } = useAppSelector((state) => state.pots);

  return (
    <OverviewContainer title="Pots" href={ROUTES.POTS}>
      <div className={styles["pots-overview"]}>
        <div className={styles["pots-total-saved"]}>
          <Image src="/icon-pot.svg" alt="Pot Icon" width={27} height={34} />
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
