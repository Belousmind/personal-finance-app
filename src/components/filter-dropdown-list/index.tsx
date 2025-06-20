"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import { ArrowIcon } from "../icons/arrow-icon";

import clsx from "clsx";
import styles from "./style.module.scss";

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
    <div className={styles.dropdown}>
      <span className={styles.label}>{label}</span>

      <Listbox value={selected} onChange={onChange}>
        <div className={styles["listbox-wrapper"]}>
          <ListboxButton className={styles["listbox-button"]}>
            <span className={styles["listbox-display"]}>
              <span className={styles["selected-label"]}>{selected.label}</span>
              <ArrowIcon />
            </span>

            {iconSrc && (
              <Image src={iconSrc} alt="icon" width={20} height={20} />
            )}
          </ListboxButton>

          <ListboxOptions modal={false} className={styles["listbox-options"]}>
            {list.map((item) => (
              <ListboxOption
                key={item.label}
                value={item}
                className={clsx(
                  styles["listbox-option"],
                  selected.label === item.label && styles.selected
                )}
              >
                <span>{item.label}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
