import styles from "./style.module.scss";
import { clsx } from "clsx";

type Props = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
};

export default function PaginationButton({ text, onClick, isActive }: Props) {
  return (
    <button
      className={clsx(styles.button, isActive && styles.active)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
