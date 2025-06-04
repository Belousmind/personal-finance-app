import styles from "./style.module.scss";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary" | "destroy";
};

export default function Button({ text, variant = "primary" }: ButtonProps) {
  return <button className={`${styles.button} ${styles[variant]}`}>{text}</button>;
}
