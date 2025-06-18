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
  title: string;
  placeholder?: string;
};

export function NumberField<T extends FieldValues>({
  name,
  control,
  errors,
  title,
  placeholder = "",
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputField
          title={title}
          type="number"
          placeholder={placeholder}
          withPrefix
          {...field}
          helpText={
            errors[name]?.message === "Expected number, received nan"
              ? "Please enter a number"
              : (errors[name]?.message as string)
          }
        />
      )}
    />
  );
}
