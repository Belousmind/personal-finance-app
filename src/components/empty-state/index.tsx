import styles from "./styles.module.scss";

export default function EmptyState({ text }: { text: string }) {
  return <span className={styles.text}>{text}</span>;
}
