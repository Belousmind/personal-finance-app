import styles from "./style.module.scss";
import OptionButton from "../option-button";

type ColorTitleProps = {
  color: string;
  title: string;
};

export default function ColorTitle({ color, title }: ColorTitleProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.colorCircle}
        style={{ backgroundColor: color }}
      ></div>
      <span className={styles.title}>{title}</span>
      <OptionButton />
    </div>
  );
}
