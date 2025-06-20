"use client";

import {
  Controller,
  Control,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { FormDropDownList } from "@/components";

type CategoryOption = {
  label: string;
  value: string;
};

type Props<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  options: CategoryOption[];
  error?: FieldError;
};

export function CategorySelectField<TFieldValues extends FieldValues>({
  control,
  options,
  error,
  name,
}: Props<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormDropDownList
          label="Category"
          list={options}
          selected={options.find((c) => c.value === field.value) || options[0]}
          onChange={(item) => field.onChange(item.value)}
          helpText={error?.message}
        />
      )}
    />
  );
}
