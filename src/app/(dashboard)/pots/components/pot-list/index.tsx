"use client";

import { useAppSelector } from "@/store/hooks";
import { EmptyState } from "@/components";
import Pot from "../pot";
import styles from "./style.module.scss";

export default function PotList() {
  const { pots } = useAppSelector((state) => state.pots);

  return (
    <>
      <section className={styles["pots-container"]}>
        {pots.length > 0 ? (
          pots.map((pot) => <Pot key={pot.name} {...pot} />)
        ) : (
          <EmptyState text="You haven’t created any savings pots yet. Add one to start tracking your savings goals." />
        )}
      </section>
    </>
  );
}
