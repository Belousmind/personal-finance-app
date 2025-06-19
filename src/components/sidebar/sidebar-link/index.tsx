"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "@/constants";

import { m, AnimatePresence } from "framer-motion";
import { textVariants, linkVariants } from "@/constants";
import clsx from "clsx";
import styles from "./style.module.scss";

type Props = NavigationItem & {
  isClosed: boolean;
  index: number;
  isDesktop: boolean;
};

export default function SideBarLink({
  link,
  label,
  icon,
  isClosed,
  index,
  isDesktop,
}: Props) {
  const pathname = usePathname();
  const isActive = pathname === link;

  const motionProps = isDesktop
    ? {
        variants: linkVariants,
        animate: isClosed ? "hidden" : "visible",
        initial: false,
      }
    : {};

  return (
    <m.div {...motionProps} key={isDesktop ? "desktop" : "mobile"}>
      <Link
        href={link}
        onClick={(e) => e.stopPropagation()}
        className={clsx(styles.link, {
          [styles.active]: isActive,
        })}
      >
        {icon}

        {isDesktop ? (
          <AnimatePresence mode="wait" initial={false}>
            {!isClosed && (
              <m.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={index}
                className={styles.label}
              >
                {label}
              </m.span>
            )}
          </AnimatePresence>
        ) : (
          <span className={styles.label}>{label}</span>
        )}
      </Link>
    </m.div>
  );
}
