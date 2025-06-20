"use client";

import {
  Controller,
  Control,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { FormDropDownList } from "@/components";

type ThemeOption = {
  label: string;
  value: string;
  occupied: boolean;
};

type Props<T extends FieldValues> = {
  control: Control<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  colors: ThemeOption[];
};

export function ThemeField<T extends FieldValues>({
  control,
  errors,
  name,
  colors,
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormDropDownList
          label="Theme"
          list={colors}
          selected={colors.find((c) => c.value === field.value) || colors[0]}
          onChange={(item) => field.onChange(item.value)}
          withColor
          helpText={errors[name]?.message as string}
        />
      )}
    />
  );
}
