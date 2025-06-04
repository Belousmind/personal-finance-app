import PaginationArrowButton from "./pagination-arrow-button";
import PaginationButton from "./pagination-button";
import styles from "./style.module.scss";

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <PaginationArrowButton direction="prev" />
      <div className={styles["pagination-list"]}>
        <PaginationButton text="1" />
        <PaginationButton text="2" />
        <PaginationButton text="3" />
      </div>

      <PaginationArrowButton direction="next" />
    </div>
  );
}
