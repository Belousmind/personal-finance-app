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
        className={styles["spending-color"]}
        style={{ backgroundColor: theme }}
      ></div>
      <span className={styles["spending-title"]}>{category}</span>
      <span className={styles["spending-amount"]}>
        ${Math.abs(total).toFixed(2)}
      </span>
      <span className={styles["spending-maximum"]}>
        of ${maximum.toFixed(2)}
      </span>
    </div>
  );
}
