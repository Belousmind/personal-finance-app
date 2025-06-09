import styles from "./style.module.scss";

type SpendingItemProps = {
  theme: string;
  category: string;
  maximum: number;
  // пока что необязательный, но будет нужен 
  amount?: string;
};

export default function SpendingItem({
  theme,
  category,
  maximum,
}: SpendingItemProps) {
  return (
    <div className={styles.spending}>
      <div
        className={styles.spendingColor}
        style={{ backgroundColor: theme }}
      ></div>
      <span className={styles.spendingTitle}>{category}</span>
      <span className={styles.spendingAmount}>${20.0}</span>
      <span className={styles.spendingMaximum}>of ${maximum.toFixed(2)}</span>
    </div>
  );
}
