"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SidebarItem } from "../sidebar.data";
import styles from "./style.module.scss";

export default function SideBarLink({ link, label, icon }: SidebarItem) {
  
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={clsx(styles.link, {
        [styles.active]: isActive,
      })}
    >
      {icon}
      <span className={styles.label}>{label}</span>
    </Link>
  );
}
