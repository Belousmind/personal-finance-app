import styles from "./style.module.scss";

type SavingSmallProps = {
  theme: string;
  name: string;
  total: number;
};

export default function SavingSmall({ theme, name, total }: SavingSmallProps) {
  return (
    <div className={styles.potCard}>
      <div className={styles.potColor} style={{ backgroundColor: theme }} />
      <span className={styles.potLabel}>{name}</span>
      <span className={styles.potValue}>
        ${typeof total === "number" ? total.toFixed(2) : "0.00"}
      </span>
    </div>
  );
}
