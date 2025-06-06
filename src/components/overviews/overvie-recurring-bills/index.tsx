import OverviewContainer from "../overview-container";
import styles from "./style.module.scss";

const RecurringBills = [
  {
    name: "Paid Bills",
    theme: "#277C78",
    total: 190.0,
  },
  {
    name: "Total Upcoming",
    theme: "#F2CDAC",
    total: 194.98,
  },
  {
    name: "Due Soon",
    theme: "#82C9D7",
    total: 59.98,
  },
];

export default function OvervieRecurringBills() {
  return (
    <OverviewContainer
      title="Recurring Bills"
      href="/recurring-bills"
      gapSize={32}
    >
      <div className={styles.billsContainer}>
        {RecurringBills.map((bill) => (
          <Bill
            key={bill.name}
            title={bill.name}
            sum={bill.total.toFixed(2)}
            color={bill.theme}
          />
        ))}
      </div>
    </OverviewContainer>
  );
}

type BillProps = {
  title: string;
  sum: string;
  color: string;
};

function Bill({ title, sum, color }: BillProps) {
  return (
    <div
      className={styles.billItem}
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <span className={styles.billTitle}>{title}</span>
      <span className={styles.billAmount}>${sum}</span>
    </div>
  );
}
