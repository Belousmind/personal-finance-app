"use client";

import {
  Controller,
  Control,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { InputField } from "@/components";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
};

export function NameField<T extends FieldValues>({
  name,
  control,
  errors,
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputField
          title="Pot Name"
          placeholder="e.g. Rainy Days"
          {...field}
          helpText={(errors[name]?.message as string) ?? "30 characters left"}
        />
      )}
    />
  );
}
