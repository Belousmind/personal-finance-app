import styles from "./style.module.scss";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary" | "destroy";
  onClick?: () => void;
};

export default function Button({
  text,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
}
