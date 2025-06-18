"use client";

import { Controller, Control } from "react-hook-form";
import { DropDownList } from "@/components";
import { FieldError } from "react-hook-form";

type CategoryOption = {
  label: string;
  value: string;
};

type Props = {
  control: Control<any>;
  options: CategoryOption[];
  error?: FieldError;
};

export function CategorySelectField({ control, options, error }: Props) {
  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <DropDownList
          label="Category"
          list={options}
          selected={options.find((c) => c.value === field.value) || options[0]}
          onChange={(item) => field.onChange(item.value)}
          isForm
          helpText={error?.message}
        />
      )}
    />
  );
}
