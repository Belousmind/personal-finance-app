import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <div>
        <h1 className={styles["not-found-title"]}>404 Page Not Found</h1>
        <p className={styles["not-found-text"]}>
          Sorry, the page you are looking for does not exist
        </p>
      </div>
    </div>
  );
}
