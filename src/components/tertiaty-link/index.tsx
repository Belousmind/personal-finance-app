import Link from "next/link";
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
      <ArrowRightIcon />
    </Link>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M4.76531 2.48468L8.51531 6.23469C8.55018 6.26951 8.57784 6.31087 8.59671 6.3564C8.61558 6.40192 8.62529 6.45072 8.62529 6.5C8.62529 6.54928 8.61558 6.59808 8.59671 6.6436C8.57784 6.68912 8.55018 6.73048 8.51531 6.76531L4.76531 10.5153C4.71287 10.5678 4.64602 10.6036 4.57324 10.6181C4.50046 10.6326 4.42501 10.6251 4.35645 10.5967C4.28789 10.5683 4.22931 10.5202 4.1881 10.4585C4.1469 10.3968 4.12494 10.3242 4.125 10.25L4.125 2.75C4.12494 2.67579 4.1469 2.60323 4.1881 2.5415C4.22931 2.47978 4.28789 2.43167 4.35645 2.40326C4.42501 2.37486 4.50046 2.36743 4.57324 2.38192C4.64602 2.39642 4.71287 2.43218 4.76531 2.48468Z"
        fill="currentColor"
      />
    </svg>
  );
}
