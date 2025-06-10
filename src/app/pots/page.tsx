"use client";

import { useAppSelector } from "@/store/hooks";

import {MainContent, Button} from "@/components";
import Pot from "./components/pot";

import styles from "./style.module.scss";

export default function Page() {

  const { pots } = useAppSelector((state) => state.pots);

  return (
    <MainContent text="Pots">
      <Button text="+ Add New Pot" />
      <section className={styles.potsContainer}>
        {pots.map((pot) => (
          <Pot key={pot.name} {...pot} />
        ))}
      </section>
    </MainContent>
  );
}
