"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
// import { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";

const colorsList = [
  { label: "Green", value: "#277c78" },
  { label: "Yellow", value: "#f2cdac" },
  { label: "Cyan", value: "#82c9d7" },
  { label: "Navy", value: "#626070" },
  { label: "Red", value: "#c94736" },
  { label: "Purple", value: "#826cb0" },
  { label: "Turquoise", value: "#597c7c" },
  { label: "Brown", value: "#93674f" },
  { label: "Magenta", value: "#934f6f" },
  { label: "Blue", value: "#3f82b2" },
  { label: "Navy Grey", value: "#97a0ac" },
  { label: "Army Green", value: "#7f9161" },
  { label: "Gold", value: "#cab361" },
  { label: "Orange", value: "#be6c49" },
];

type DropDownListProps = {
  label: string;
  list: { label: string; value: string }[];
  iconSrc: string;
  selected: { label: string; value: string };
  onChange: (item: { label: string; value: string }) => void;
};

export default function DropDownList({
  label,
  list,
  iconSrc,
  selected,
  onChange,
}: DropDownListProps) {
  return (
    <div className={styles.dropDown}>
      <span className={styles.label}>{label}</span>
      <Listbox value={selected} onChange={onChange}>
        <ListboxButton className={styles.listboxButton}>
          <span>
            {selected.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path d="..." fill="#201F24" />
            </svg>
          </span>
          <img src={iconSrc} alt="" />
        </ListboxButton>
        <ListboxOptions
          modal={false}
          className={styles.listboxOptions}
          anchor="bottom"
        >
          {list.map((item) => (
            <ListboxOption
              key={item.label}
              value={item}
              className={clsx(
                styles.listboxOption,
                selected.label === item.label && styles.selected
              )}
            >
              {item.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
