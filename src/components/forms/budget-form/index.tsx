"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { budgetSchema, BudgetFormData } from "@/lib/schema/budget-schema";
import { addBudget, editBudget } from "@/store/budgets/budgetsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { useEffect } from "react";

import { InputField, Button, DropDownList } from "@/components";

import { useAvailableColors, useAvailableCategories } from "@/hooks";

import styles from "./style.module.scss";

type BudgetFormProps = {
  initialCategory?: string;
  mode?: "create" | "edit";
  onClose: () => void;
};

export default function BudgetForm({
  initialCategory,
  mode = "create",
  onClose,
}: BudgetFormProps) {
  const dispatch = useAppDispatch();
  const { budgetColors } = useAvailableColors();

  const availableCategories = useAvailableCategories();
  const budgets = useAppSelector((state) => state.budgets);
  const transactions = useAppSelector(
    (state) => state.transactions.transactions
  );

  const editingBudget = budgets.find((b) => b.category === initialCategory);

  const categoryOptions =
    mode === "edit" && editingBudget
      ? [
          ...availableCategories,
          ...(availableCategories.some(
            (c) => c.value === editingBudget.category
          )
            ? []
            : [
                {
                  label: editingBudget.category,
                  value: editingBudget.category,
                },
              ]),
        ]
      : availableCategories;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      category: editingBudget?.category || availableCategories[0]?.value || "",
      maximum: editingBudget?.maximum ?? 0,
      theme: editingBudget?.theme || budgetColors[0]?.value || "",
    },
  });

  useEffect(() => {
    if (editingBudget) {
      reset({
        category: editingBudget.category,
        maximum: editingBudget.maximum,
        theme: editingBudget.theme,
      });
    }
  }, [editingBudget, reset]);

  const onSubmit = (data: BudgetFormData) => {
    if (mode === "edit") {
      dispatch(editBudget({ ...data, transactions }));
    } else {
      dispatch(addBudget({ ...data, transactions }));
    }
    onClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <DropDownList
            label="Category"
            list={categoryOptions}
            selected={
              categoryOptions.find((c) => c.value === field.value) ||
              categoryOptions[0]
            }
            onChange={(item) => field.onChange(item.value)}
            isForm
            helpText={errors.category?.message}
          />
        )}
      />

      <Controller
        name="maximum"
        control={control}
        render={({ field }) => (
          <InputField
            title="Maximum Spend"
            placeholder="e.g. 2000"
            type="number"
            withPrefix
            {...field}
            helpText={errors.maximum?.message}
          />
        )}
      />

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
            helpText={errors.theme?.message}
          />
        )}
      />

      <Button text={mode === "edit" ? "Save Changes" : "Add Budget"} />
    </form>
  );
}
