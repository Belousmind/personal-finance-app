import MainContent from "@/components/main-content";
import ColorTitle from "@/components/color-title";
import SavingSmall from "@/components/saving-small";
import LatestSpeding from "./components/latest-speding";
import Chart from "@/components/pie-chart";

import styles from "./style.module.scss";

import data from "../../../data.json";

const { budgets } = data;

export default function Page() {
  return (
    <MainContent text="Budgets">
      <section className={styles.budgetSection}>
        <div className={styles.budgetSummary}>
          <Chart />
          <SpendingSummary />
        </div>
        <div className={styles.budgetContainer}>
          {budgets.map((budget) => (
            <Budget
              key={budget.category}
              title={budget.category}
              theme={budget.theme}
              amount={budget.maximum}
            />
          ))}
        </div>
      </section>
    </MainContent>
  );
}

type BudgetProps = {
  title: string;
  theme: string;
  amount: number;
};

function Budget({ title, theme, amount }: BudgetProps) {
  return (
    <div className={styles.budget}>
      <ColorTitle title={title} color={theme} />

      <div className={styles.budgetStats}>
        <span className={styles.budgetMaximum}>
          Maximum of ${amount.toFixed(2)}
        </span>
        <div className={styles.budgetBar}>
          <div
            className={styles.budgetBarPrecent}
            // width: precent
            style={{ backgroundColor: theme }}
          ></div>
        </div>
        <SavingSmall title="Spent" color={theme} sum="10.00" />
        <SavingSmall
          title="Remaining"
          color="#F8F4F0"
          sum={amount.toFixed(2)}
        />
      </div>

      <LatestSpeding />
    </div>
  );
}

function SpendingSummary() {
  return (
    <div className={styles.spendingSummary}>
      <span>Spending Summary</span>
      <div>
        {budgets.map((budget) => (
          <SpendingItem
            key={budget.category}
            title={budget.category}
            theme={budget.theme}
            maximum={budget.maximum}
          />
        ))}
      </div>
    </div>
  );
}

type SpendingItemProps = {
  theme: string;
  title: string;
  amount?: number;
  maximum: number;
};

function SpendingItem({ theme, title, maximum }: SpendingItemProps) {
  return (
    <div className={styles.spending}>
      <div
        className={styles.spendingColor}
        style={{ backgroundColor: theme }}
      ></div>
      <span className={styles.spendingTitle}>{title}</span>
      <span className={styles.spendingAmount}>${20.0}</span>
      <span className={styles.spendingMaximum}>${maximum.toFixed(2)}</span>
    </div>
  );
}
