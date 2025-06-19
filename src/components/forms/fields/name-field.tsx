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
  maxLength: number;
};

export function NameField<T extends FieldValues>({
  name,
  control,
  errors,
  maxLength,
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const currentLength = field.value?.length ?? 0;
        const remaining = maxLength - currentLength;

        let helpText = `${remaining} characters left`;
        if (remaining < 0) {
          helpText = `characters over limit`;
        }

        const errorMessage = errors[name]?.message as string | undefined;

        return (
          <InputField
            title="Pot Name"
            placeholder="e.g. Rainy Days"
            {...field}
            helpText={errorMessage ?? helpText}
          />
        );
      }}
    />
  );
}
