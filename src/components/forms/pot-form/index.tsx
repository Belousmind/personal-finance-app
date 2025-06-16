"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { potSchema, PotFormData } from "@/lib/schema/pot-schema";

import { InputField, DropDownList, Button } from "@/components";

import { useAvailableColors } from "@/utils/is-occupied-color";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addPot, editPot } from "@/store/pots/potsSlice";

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
  const { budgetColors } = useAvailableColors();
  const pots = useAppSelector((state) => state.pots.pots);

  const editingPot = pots.find((p) => p.name === initialName);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PotFormData>({
    resolver: zodResolver(potSchema),
    defaultValues: {
      name: editingPot?.name || "",
      target: editingPot?.target || 0,
      theme: editingPot?.theme || budgetColors[0]?.value || "",
    },
  });

  const onSubmit = (data: PotFormData) => {
    if (mode === "edit") {
      dispatch(editPot(data));
    } else {
      dispatch(addPot(data));
    }
    onClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <InputField
            title="Pot Name"
            placeholder="e.g. Rainy Days"
            helpText="30 characters left"
            {...field}
          />
        )}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <Controller
        name="target"
        control={control}
        render={({ field }) => (
          <InputField
            title="Target"
            type="number"
            placeholder="e.g. 2000"
            withPrefix
            {...field}
          />
        )}
      />
      {errors.target && <p>{errors.target.message}</p>}

      <Controller
        name="theme"
        control={control}
        render={({ field }) => (
          <DropDownList
            label="Theme"
            list={budgetColors}
            selected={
              budgetColors.find((c) => c.value === field.value) ||
              budgetColors[0]
            }
            onChange={(item) => field.onChange(item.value)}
            withColor
            isForm
          />
        )}
      />
      {errors.theme && <p>{errors.theme.message}</p>}

      <Button text={mode === "edit" ? "Save Changes" : "Add Pot"} />
    </form>
  );
}
