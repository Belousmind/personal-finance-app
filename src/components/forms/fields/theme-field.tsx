"use client";

import { Controller } from "react-hook-form";
import { FormDropDownList } from "@/components";

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
        <FormDropDownList
          label="Theme"
          list={colors}
          selected={colors.find((c) => c.value === field.value) || colors[0]}
          onChange={(item) => field.onChange(item.value)}
          withColor
          helpText={errors.theme?.message}
        />
      )}
    />
  );
}
