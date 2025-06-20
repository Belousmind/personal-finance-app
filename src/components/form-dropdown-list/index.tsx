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
    <div className={styles["v-dropdown"]}>
      <span className={styles["v-label"]}>{label}</span>

      <Listbox value={selected} onChange={onChange}>
        <div className={styles["listbox-wrapper"]}>
          <ListboxButton className={styles["listbox-button"]}>
            <span className={styles["listbox-display"]}>
              <span className={styles["selected-label"]}>
                {withColor && (
                  <div
                    className={styles["color-tag"]}
                    style={{ backgroundColor: selected.value }}
                  ></div>
                )}
                {selected.label}
              </span>
              <ArrowIcon />
            </span>
          </ListboxButton>
          <span className={styles["help-text"]}>{helpText}</span>
          <ListboxOptions modal={false} className={styles["listbox-options"]}>
            {list.map((item) => (
              <ListboxOption
                key={item.label}
                disabled={item.occupied && item.value !== selected.value}
                value={item}
                className={clsx(
                  styles["listbox-option"],
                  selected.label === item.label && styles.selected,
                  item?.occupied && styles.used
                )}
              >
                {withColor && (
                  <div
                    className={styles["color-tag"]}
                    style={{ backgroundColor: item.value }}
                  ></div>
                )}
                <span>{item.label}</span>

                {item.occupied && (
                  <span className={styles["option-status"]}>Already used</span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
