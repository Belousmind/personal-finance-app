"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
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
  list: {label: string, value: string}[];
  iconSrc: string;
};

export function DropDownList({ label, list, iconSrc }: DropDownListProps) {
  const [selectedItem, setSelectedItem] = useState(list[0]);

  return (
    <div className={styles.dropDown}>
      <span className={styles.label}>{label}</span>
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <ListboxButton className={styles.listboxButton}>
          <span>
            {selectedItem.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M13.3537 6.85375L8.35366 11.8538C8.30722 11.9002 8.25207 11.9371 8.19138 11.9623C8.13068 11.9874 8.06561 12.0004 7.99991 12.0004C7.9342 12.0004 7.86913 11.9874 7.80844 11.9623C7.74774 11.9371 7.69259 11.9002 7.64616 11.8538L2.64616 6.85375C2.57615 6.78382 2.52847 6.6947 2.50914 6.59765C2.48982 6.50061 2.49972 6.40002 2.53759 6.3086C2.57547 6.21719 2.63962 6.13908 2.72191 6.08414C2.80421 6.0292 2.90096 5.99992 2.99991 6L12.9999 6C13.0989 5.99992 13.1956 6.0292 13.2779 6.08414C13.3602 6.13908 13.4243 6.21719 13.4622 6.3086C13.5001 6.40002 13.51 6.50061 13.4907 6.59765C13.4713 6.6947 13.4237 6.78382 13.3537 6.85375Z"
                fill="#201F24"
              />
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
                selectedItem.label === item.label && styles.selected
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
