import { TertiatyLink } from "@/components";
import styles from "./style.module.scss";

type OverviewContainerProps = {
  title: string;
  href: string;
  gapSize?: 20 | 32;
  children?: React.ReactNode;
  text?: string;
};

export default function OverviewContainer({
  title,
  text,
  href,
  gapSize = 20,
  children,
}: OverviewContainerProps) {
  return (
    <div className={styles.container} style={{ rowGap: gapSize }}>
      <h3 className={styles.title}>{title}</h3>
      <TertiatyLink href={href} text={text} />
      {children}
    </div>
  );
}
