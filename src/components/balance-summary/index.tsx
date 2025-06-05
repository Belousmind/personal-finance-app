import styles from "./style.module.scss";

import data from "../../../data.json";

const formatTitle = (key: string) => {
  switch (key) {
    case "current":
      return "Current Balance";
    case "income":
      return "Income";
    case "expenses":
      return "Expenses";
    default:
      return key;
  }
};

export default function BalanceSummary() {
  return (
    <div className={styles.stats}>
      {Object.entries(data.balance).map(([key, value]) => (
        <SummaryCard
          key={key}
          title={formatTitle(key)}
          sum={value.toFixed(2)}
        />
      ))}
    </div>
  );
}

type SummaryCardProps = {
  title: string;
  sum: string;
};

function SummaryCard({ title, sum }: SummaryCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      <span className={styles.sum}>${sum}</span>
    </div>
  );
}
