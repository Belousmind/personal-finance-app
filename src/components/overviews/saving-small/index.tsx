import styles from "./style.module.scss";

type SavingSmallProps = {
  color: string;
  title: string;
  sum: string;
};

export default function SavingSmall({ color, title, sum }: SavingSmallProps) {
  return (
    <div className={styles.potCard}>
      <div className={styles.potColor} style={{ backgroundColor: color }} />
      <span className={styles.potLabel}>{title}</span>
      <span className={styles.potValue}>${sum}</span>
    </div>
  );
}
