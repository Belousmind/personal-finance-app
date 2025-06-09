import styles from "./style.module.scss";

type SpendingItemProps = {
  theme: string;
  category: string;
  maximum: number;

  total: number;
};

export default function SpendingItem({
  theme,
  category,
  maximum,
  total,
}: SpendingItemProps) {
  return (
    <div className={styles.spending}>
      <div
        className={styles.spendingColor}
        style={{ backgroundColor: theme }}
      ></div>
      <span className={styles.spendingTitle}>{category}</span>
      <span className={styles.spendingAmount}>
        ${Math.abs(total).toFixed(2)}
      </span>
      <span className={styles.spendingMaximum}>of ${maximum.toFixed(2)}</span>
    </div>
  );
}
