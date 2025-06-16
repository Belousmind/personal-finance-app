import { RECURRING_BILLS, ROUTES } from "@/constants";
import { OverviewContainer } from "@/components";
import styles from "./style.module.scss";

export default function OvervieRecurringBills() {
  return (
    <OverviewContainer
      title="Recurring Bills"
      href={ROUTES.RECURRING_BILLS}
      gapSize={32}
    >
      <div className={styles["bills-container"]}>
        {RECURRING_BILLS.map((bill) => (
          <Bill key={bill.name} {...bill} />
        ))}
      </div>
    </OverviewContainer>
  );
}

type BillProps = {
  name: string;
  total: number;
  theme: string;
};

function Bill({ name, total, theme }: BillProps) {
  return (
    <div
      className={styles["bill-item"]}
      style={{ borderLeft: `4px solid ${theme}` }}
    >
      <span className={styles["bill-title"]}>{name}</span>
      <span className={styles["bill-amount"]}>${total.toFixed(2)}</span>
    </div>
  );
}
