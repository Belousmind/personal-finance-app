import OverviewContainer from "../overview-container";
import SavingSmall from "../saving-small";
import styles from "./style.module.scss";

import data from "../../../../data.json";

const { pots } = data;

export default function OverviewPots() {
  return (
    <OverviewContainer title="Pots" href="/pots">
      <div className={styles.potsOverview}>
        <div className={styles["total-saved"]}>
          <img src="/icon-pot.svg" alt="icon pot" />
          <span>Total Saved</span>
          <span className={styles.sum}>$850</span>
        </div>
        <div className={styles.potsCards}>
          {pots.map((pot, index) =>
            index < 4 ? (
              <SavingSmall
                key={pot.name}
                color={pot.theme}
                title={pot.name}
                sum={pot.total.toFixed(2)}
              />
            ) : null
          )}
        </div>
      </div>
    </OverviewContainer>
  );
}
