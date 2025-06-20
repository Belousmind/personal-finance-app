import styles from "./style.module.scss";
import { ArrowIcon } from "../icons/arrow-icon";

type PaginationArrowButtonProps = {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick?: () => void;
};

export default function PaginationArrowButton({
  direction,
  onClick,
  disabled,
}: PaginationArrowButtonProps) {
  const isPrev = direction === "prev";

  return (
    <button
      className={styles["arrow-button"]}
      onClick={onClick}
      disabled={disabled}
    >
      {isPrev && <ArrowIcon />}
      <span>{isPrev ? "Prev" : "Next"}</span>
      {!isPrev && <ArrowIcon />}
    </button>
  );
}
