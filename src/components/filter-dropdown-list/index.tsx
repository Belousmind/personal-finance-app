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
<div className={styles["dropdown-field"]}>
  <span className={styles["dropdown-label"]}>{label}</span>

  <Listbox value={selected} onChange={onChange}>
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

      <ListboxOptions modal={false} className={styles["dropdown-options"]}>
        {list.map((item) => (
          <ListboxOption
            key={item.label}
            value={item}
            className={clsx(
              styles["dropdown-option"],
              selected.label === item.label && styles["dropdown-option--selected"]
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
