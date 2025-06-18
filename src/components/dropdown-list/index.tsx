"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

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
  withColor?: boolean;
  isForm?: boolean;
  helpText?: string;
};

export default function DropDownList({
  label,
  list,
  iconSrc,
  selected,
  onChange,
  withColor = false,
  isForm = false,
  helpText = "",
}: DropDownListProps) {
  return (
    <div className={clsx(isForm ? styles["v-dropdown"] : styles.dropdown)}>
      <span className={clsx(isForm ? styles["v-label"] : styles.label)}>
        {label}
      </span>
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
              <DropdownArrowIcon />
            </span>
            <img src={iconSrc} alt="icon" />
          </ListboxButton>
          <span className={styles["help-text"]}>{helpText} text</span>
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

function DropdownArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M13.3541 6.85375L8.35414 11.8538C8.30771 11.9002 8.25256 11.9371 8.19186 11.9623C8.13117 11.9874 8.0661 12.0004 8.00039 12.0004C7.93469 12.0004 7.86962 11.9874 7.80892 11.9623C7.74822 11.9371 7.69308 11.9002 7.64664 11.8538L2.64664 6.85375C2.57664 6.78382 2.52895 6.6947 2.50963 6.59765C2.4903 6.50061 2.50021 6.40002 2.53808 6.3086C2.57596 6.21719 2.64011 6.13908 2.7224 6.08414C2.8047 6.0292 2.90145 5.99992 3.00039 6L13.0004 6C13.0993 5.99992 13.1961 6.0292 13.2784 6.08414C13.3607 6.13908 13.4248 6.21719 13.4627 6.3086C13.5006 6.40002 13.5105 6.50061 13.4912 6.59765C13.4718 6.6947 13.4241 6.78382 13.3541 6.85375Z"
        fill="#201F24"
      />
    </svg>
  );
}
