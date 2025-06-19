"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { m } from "framer-motion";

import { NAVIGATION_DATA, menuAnimation } from "@/constants";
import SideBarLink from "./sidebar-link";
import { LogoIcon } from "./logo-icon";
import { MenuButton } from "./sidebar-button";
import styles from "./style.module.scss";

export default function SideBar() {
  const [isClosed, setIsClosed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

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

  const motionProps = isDesktop
    ? {
        variants: menuAnimation,
        initial: false,
        animate: isClosed ? "closed" : "open",
      }
    : {};

  return (
    <m.aside
      {...motionProps}
      className={styles.menu}
      key={isDesktop ? "desktop" : "mobile"}
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
              key={index}
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
  );
}
