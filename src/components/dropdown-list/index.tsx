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

type ListProps = {
  label: string;
  value: string;
};

const categoriesList = [
  { label: "All Transactions", value: "all" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Bills", value: "bills" },
  { label: "Groceries", value: "groceries" },
  { label: "Dining Out", value: "dining-out" },
  { label: "Transportation", value: "transportation" },
  { label: "Personal Care", value: "personal-care" },
  { label: "Education", value: "education" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Shopping", value: "shopping" },
  { label: "General", value: "general" },
];

const valuesList = [
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

const sortingList = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "a-z" },
  { label: "Z to A", value: "z-a" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

export default function DropDownList() {
  const [selectedItem, setSelectedItem] = useState(sortingList[0]);

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      <ListboxButton className={styles.listboxButton}>
        {selectedItem.label} <TSvg />
      </ListboxButton>
      <ListboxOptions className={styles.listboxOptions} anchor="bottom">
        {sortingList.map((item) => (
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
  );
}

function TSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M13.3538 6.85375L8.35378 11.8538C8.30734 11.9002 8.2522 11.9371 8.1915 11.9623C8.1308 11.9874 8.06574 12.0004 8.00003 12.0004C7.93432 12.0004 7.86926 11.9874 7.80856 11.9623C7.74786 11.9371 7.69271 11.9002 7.64628 11.8538L2.64628 6.85375C2.57627 6.78382 2.52859 6.6947 2.50926 6.59765C2.48994 6.50061 2.49984 6.40002 2.53772 6.3086C2.57559 6.21719 2.63974 6.13908 2.72204 6.08414C2.80433 6.0292 2.90108 5.99992 3.00003 6L13 6C13.099 5.99992 13.1957 6.0292 13.278 6.08414C13.3603 6.13908 13.4245 6.21719 13.4623 6.3086C13.5002 6.40002 13.5101 6.50061 13.4908 6.59765C13.4715 6.6947 13.4238 6.78382 13.3538 6.85375Z"
        fill="#201F24"
      />
    </svg>
  );
}
