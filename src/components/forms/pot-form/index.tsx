"use client";
import DropDownList from "@/components/dropdown-list";
import InputField from "@/components/fileds/input-field";
import { useAvailableColors } from "@/lib/filters";

import Button from "@/components/button";

import { useState } from "react";

export default function PotForm() {
  const { budgetColors } = useAvailableColors();

  const [selectedBudgetColor, setSelectedBudgetColor] = useState<{
    label: string;
    value: string;
    occupied?: boolean;
  }>(budgetColors[0]);

  return (
    <>
      <form action="">
        <InputField
          title="Pot Name"
          placeholder="e.g. Rainy Days"
          helpText="30 characters left"
        />

        <InputField title="Target" type="number" placeholder="e.g. 2000" withPrefix />

        <DropDownList
          label="Theme"
          list={budgetColors}
          selected={selectedBudgetColor}
          onChange={setSelectedBudgetColor}
          withColor
          isForm={true}
        />
        <Button text="add Pot"/> 
      </form>
    </>
  );
}
