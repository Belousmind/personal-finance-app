import styles from "./style.module.scss";

type MainContentProps = {
  text: string;
  children?: React.ReactNode;
};

export default function MainContent({ text, children }: MainContentProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{text}</h1>
      {children}
    </main>
  );
}
