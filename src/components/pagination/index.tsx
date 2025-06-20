import PaginationArrowButton from "./pagination-arrow-button";
import PaginationButton from "./pagination-button";
import styles from "./style.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <PaginationArrowButton
        direction="prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      <div className={styles["pagination-list"]}>
        {pages.map((page) => (
          <PaginationButton
            key={page}
            text={String(page)}
            isActive={page === currentPage}
            onClick={() => onPageChange(page)}
          />
        ))}
      </div>
      <span className={styles["current-page"]}>
        Page {currentPage} / {totalPages}
      </span>
      <PaginationArrowButton
        direction="next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
}
