import styles from "./style.module.scss";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "destroy";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  text,
  variant = "primary",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
