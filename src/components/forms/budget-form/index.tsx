"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { budgetSchema, BudgetFormData } from "@/lib/schema/budget-schema";
import { addBudget, editBudget } from "@/store/budgets/budgetsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getThemeOptions } from "@/utils";

import { useEffect } from "react";

import { Button } from "@/components";

import { useAvailableColors, useAvailableCategories } from "@/hooks";

import { ThemeField, NumberField, CategorySelectField } from "../fields";

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

  const themeOptions = getThemeOptions(budgetColors, editingBudget?.theme);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      category: editingBudget?.category,
      maximum: editingBudget?.maximum,
      theme: editingBudget?.theme,
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
      <CategorySelectField
        control={control}
        options={categoryOptions}
        error={errors.category}
      />

      <NumberField<BudgetFormData>
        name="maximum"
        control={control}
        errors={errors}
        title="Maximum Spend"
        placeholder="e.g. 2000"
      />

      <ThemeField control={control} errors={errors} colors={themeOptions} />

      <Button text={mode === "edit" ? "Save Changes" : "Add Budget"} />
    </form>
  );
}
