"use client";

import { Controller } from "react-hook-form";
import { DropDownList } from "@/components";

type Props = {
  control: any;
  errors: Record<string, any>;
  colors: { label: string; value: string; occupied: boolean }[];
};

export function ThemeField({ control, errors, colors }: Props) {
  return (
    <Controller
      name="theme"
      control={control}
      render={({ field }) => (
        <DropDownList
          label="Theme"
          list={colors}
          selected={colors.find((c) => c.value === field.value) || colors[0]}
          onChange={(item) => field.onChange(item.value)}
          withColor
          isForm
          helpText={errors.theme?.message}
        />
      )}
    />
  );
}
