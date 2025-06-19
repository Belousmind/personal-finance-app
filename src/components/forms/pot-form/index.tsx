"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { potSchema, PotFormData } from "@/lib/schema/pot-schema";

import { Button } from "@/components";

import { useAvailableColors } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addPot, editPot } from "@/store/pots/potsSlice";
import { getThemeOptions } from "@/utils";
import { ThemeField, NumberField, NameField } from "../fields";
import styles from "./style.module.scss";

type PotFormProps = {
  initialName?: string;
  mode?: "create" | "edit";
  onClose: () => void;
};

export default function PotForm({
  initialName,
  mode = "create",
  onClose,
}: PotFormProps) {
  const dispatch = useAppDispatch();

  const { potColors } = useAvailableColors();
  const pots = useAppSelector((state) => state.pots.pots);

  const editingPot = pots.find((p) => p.name === initialName);

  const themeOptions = getThemeOptions(potColors, editingPot?.theme);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PotFormData>({
    resolver: zodResolver(potSchema),
    defaultValues: {
      name: editingPot?.name,
      target: editingPot?.target,
      theme: editingPot?.theme,
    },
  });

  const onSubmit = (data: PotFormData) => {
    if (mode === "edit") {
      dispatch(editPot({ ...data, originalName: editingPot?.name! }));
    } else {
      dispatch(addPot(data));
    }
    onClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <NameField<PotFormData>
        name="name"
        control={control}
        errors={errors}
        maxLength={30}
      />

      <NumberField<PotFormData>
        name="target"
        title="Target"
        placeholder="e.g. 2000"
        control={control}
        errors={errors}
      />

      <ThemeField control={control} errors={errors} colors={themeOptions} />

      <Button text={mode === "edit" ? "Save Changes" : "Add Pot"} />
    </form>
  );
}
