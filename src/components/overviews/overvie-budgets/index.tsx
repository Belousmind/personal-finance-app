import OverviewContainer from "../overview-container";
import Chart from "@/components/pie-chart";
import SavingSmall from "../../saving-small";

import styles from "./style.module.scss";

import data from "../../../../data.json";

const { budgets } = data;

export default function OvervieBudgets() {
  return (
    <OverviewContainer title="Budgets" href="/budgets">
      <div className={styles.budgetsOverview}>
        <Chart />
        <div className={styles.budgetsList}>
          {budgets.map((budget) => (
            <SavingSmall
              key={budget.category}
              color={budget.theme}
              title={budget.category}
              sum={budget.maximum.toFixed(2)}
            />
          ))}
        </div>
      </div>
    </OverviewContainer>
  );
}
