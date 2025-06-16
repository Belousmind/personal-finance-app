import getPercentage from "@/utils/get-percentage";
import styles from "./style.module.scss";

type Props = {
  current: number;
  incoming: number;
  target: number;
  isWithdraw: boolean;
  exceeded: boolean;
};

export default function ProgressBar({
  current,
  incoming,
  target,
  isWithdraw,
  exceeded,
}: Props) {
  const currentPercentage = getPercentage(current, target);
  const incomingPercentage = getPercentage(incoming, target);

  return (
    <div className={styles["progress-wrapper"]}>
      <div className={styles["progress-bar"]}>
        <div
          className={styles["current-progress"]}
          style={{ width: `${currentPercentage}%` }}
        ></div>
        {!exceeded && (
          <div
            className={styles["incoming-progress"]}
            style={{
              width: `${incomingPercentage}%`,
              backgroundColor: isWithdraw ? "#c94736" : "#597c7c",
            }}
          ></div>
        )}
      </div>

      <span
        className={`${styles.percentage} ${
          isWithdraw ? styles.red : styles.green
        } ${exceeded && styles.red}`}
      >
        {!exceeded ? `${incomingPercentage.toFixed(2)}%` : "Limit exceeded"}
      </span>
      <span className={styles["target-label"]}>
        Target of ${target.toLocaleString()}
      </span>
    </div>
  );
}
