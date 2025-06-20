import Link from "next/link";
import { ArrowIcon } from "../icons/arrow-icon";
import styles from "./style.module.scss";

type TertiaryLinkProps = {
  text?: string;
  href: string;
};

export default function TertiatyLink({
  text = "see details",
  href,
}: TertiaryLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {text}
      <ArrowIcon />
    </Link>
  );
}
