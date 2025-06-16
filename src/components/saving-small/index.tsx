import styles from "./style.module.scss";

type SavingSmallProps = {
  theme: string;
  name: string;
  total: number;
};

export default function SavingSmall({ theme, name, total }: SavingSmallProps) {
  return (
    <div className={styles["pot-card"]}>
      <div className={styles["pot-color"]} style={{ backgroundColor: theme }} />
      <span className={styles["pot-label"]}>{name}</span>
      <span className={styles["pot-value"]}>${Math.abs(total).toFixed(2)}</span>
    </div>
  );
}
