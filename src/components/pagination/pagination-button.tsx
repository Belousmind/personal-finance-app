import styles from "./style.module.scss";
import { clsx } from "clsx";

type PaginationButtonProps = {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function PaginationButton({
  text,
  isActive = false,
}: PaginationButtonProps) {
  return (
    <button className={clsx(styles.button, isActive && styles.active)}>
      {text}
    </button>
  );
}
