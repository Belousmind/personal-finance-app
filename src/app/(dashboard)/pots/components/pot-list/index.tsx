"use client";

import { useAppSelector } from "@/store/hooks";
import { EmptyState } from "@/components";
import Pot from "../pot";
import styles from "./style.module.scss";

export default function PotList() {
  const { pots, isLoading } = useAppSelector((state) => state.pots);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (pots.length === 0) {
    return (
      <EmptyState text="You haven’t created any savings pots yet. Add one to start tracking your savings goals." />
    );
  }

  return (
    <>
      <section className={styles["pots-container"]}>
        {pots.map((pot) => (
          <Pot key={pot.name} {...pot} />
        ))}
      </section>
    </>
  );
}
