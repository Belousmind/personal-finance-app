"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
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
  selected: DropDownItem;
  onChange: (item: DropDownItem) => void;
  withColor?: boolean;
  helpText?: string;
};

export default function FormDropDownList({
  label,
  list,
  selected,
  onChange,
  withColor = false,
  helpText = "",
}: DropDownListProps) {
  return (
    <div className={styles["dropdown-field"]}>
      <span className={styles["dropdown-label"]}>{label}</span>

      <Listbox value={selected} onChange={onChange}>
        <div className={styles["dropdown-wrapper"]}>
          <ListboxButton className={styles["dropdown-button"]}>
            <span className={styles["dropdown-display"]}>
              <span className={styles["dropdown-selected"]}>
                {withColor && (
                  <div
                    className={styles["dropdown-color"]}
                    style={{ backgroundColor: selected.value }}
                  ></div>
                )}
                {selected.label}
              </span>
              <ArrowIcon />
            </span>
          </ListboxButton>

          <span className={styles["dropdown-help"]}>{helpText}</span>

          <ListboxOptions modal={false} className={styles["dropdown-options"]}>
            {list.map((item, index) => (
              <ListboxOption
                key={item.label}
                disabled={
                  index === 0 ||
                  (item.occupied && item.value !== selected.value)
                }
                value={item}
                className={clsx(
                  styles["dropdown-option"],
                  selected.label === item.label && styles.selected,
                  item?.occupied && styles.used
                )}
              >
                {withColor && (
                  <div
                    className={styles["dropdown-color"]}
                    style={{ backgroundColor: item.value }}
                  ></div>
                )}
                <span>{item.label}</span>
                {item.occupied && (
                  <span className={styles["dropdown-status"]}>
                    Already used
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
