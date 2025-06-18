import { COLORS_LIST } from "@/constants";

type Color = {
  label: string;
  value: string;
  occupied: boolean;
};

export function getThemeOptions(
  availableColors: Color[],
  editingTheme?: string
): Color[] {
  if (!editingTheme) return availableColors;

  return availableColors.map((color) =>
    color.value === editingTheme ? { ...color, occupied: false } : color
  );
}
