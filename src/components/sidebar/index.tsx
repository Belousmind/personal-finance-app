"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { m } from "framer-motion";

import { NAVIGATION_DATA, menuAnimation } from "@/constants";
import SideBarLink from "./sidebar-link";
import { LogoIcon } from "./logo-icon";
import { MenuButton } from "./sidebar-button";
import styles from "./style.module.scss";

type SideBarProps = {
  deviceType: boolean;
};

export default function SideBar({ deviceType }: SideBarProps) {
  const [isClosed, setIsClosed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(deviceType);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 900);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleMenu = () => {
    if (isDesktop) setIsClosed((prev) => !prev);
  };

  return isDesktop ? (
    <m.aside
      variants={menuAnimation}
      initial={false}
      animate={isClosed ? "closed" : "open"}
      className={styles.menu}
      onClick={toggleMenu}
    >
      <Link
        className={styles.logo}
        href="/"
        onClick={(e) => e.stopPropagation()}
      >
        <LogoIcon isClosed={isClosed} />
      </Link>
      <nav className={styles.nav}>
        {NAVIGATION_DATA.map((menuItem, index) => {
          return (
            <SideBarLink
              key={`${menuItem.label}-${index}`}
              {...menuItem}
              isClosed={isClosed}
              index={index}
              isDesktop={isDesktop}
            />
          );
        })}
      </nav>

      <MenuButton onToggle={toggleMenu} isClosed={isClosed} />
    </m.aside>
  ) : (
    <aside className={styles.menu}>
      <nav className={styles.nav}>
        {NAVIGATION_DATA.map((menuItem, index) => {
          return (
            <SideBarLink
              key={`${menuItem.label}-${index}`}
              {...menuItem}
              isClosed={isClosed}
              index={index}
              isDesktop={isDesktop}
            />
          );
        })}
      </nav>
    </aside>
  );
}
