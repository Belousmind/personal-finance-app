import styles from "./style.module.scss";
import OptionButton from "../option-button";

type ColorTitleProps = {
  color: string;
  category: string;
  label: string;
};

export default function ColorTitle({ color, category, label }: ColorTitleProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.colorCircle}
        style={{ backgroundColor: color }}
      ></div>
      <span className={styles.title}>{category}</span>
      <OptionButton label={label} category={category}/>
    </div>
  );
}
