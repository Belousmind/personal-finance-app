"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import { ArrowIcon } from "../icons/arrow-icon";
import { basePath } from "@/constants";
import { m, AnimatePresence, Variants } from "framer-motion";

import clsx from "clsx";
import styles from "./style.module.scss";

const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top",
    transition: {
      duration: 0.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

const optionVariants: Variants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

type DropDownItem = {
  label: string;
  value: string;
  occupied?: boolean;
};

type DropDownListProps = {
  label: string;
  list: DropDownItem[];
  iconSrc?: string;
  selected: DropDownItem;
  onChange: (item: DropDownItem) => void;
};

export default function FilterDropDownList({
  label,
  list,
  iconSrc,
  selected,
  onChange,
}: DropDownListProps) {
  return (
    <div className={styles["dropdown-field"]}>
      <span className={styles["dropdown-label"]}>{label}</span>

      <Listbox value={selected} onChange={onChange}>
        {({ open }) => (
          <div className={styles["dropdown-wrapper"]}>
            <ListboxButton className={styles["dropdown-button"]}>
              <span className={styles["dropdown-display"]}>
                <span className={styles["dropdown-selected"]}>
                  {selected.label}
                </span>
                <ArrowIcon />
              </span>

              {iconSrc && (
                <Image
                  src={`${basePath}${iconSrc}`}
                  alt={`${selected.label} icon`}
                  width={20}
                  height={20}
                  unoptimized
                />
              )}
            </ListboxButton>

            <AnimatePresence>
              {open && (
                <ListboxOptions
                  as={m.div}
                  static
                  className={styles["dropdown-options"]}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  modal={false}
                >
                  {list.map((item) => (
                    <ListboxOption
                      key={item.label}
                      value={item}
                      as={m.div}
                      variants={optionVariants}
                      className={clsx(
                        styles["dropdown-option"],
                        selected.label === item.label &&
                          styles["dropdown-option--selected"]
                      )}
                    >
                      <span>{item.label}</span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              )}
            </AnimatePresence>
          </div>
        )}
      </Listbox>
    </div>
  );
}
