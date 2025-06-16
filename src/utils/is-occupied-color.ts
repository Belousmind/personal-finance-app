export default function isOccupiedColor(
  arr: { theme: string }[],
  colorsList: { label: string; value: string }[]
) {
  return colorsList.map((color) => ({
    ...color,
    occupied: arr.some(
      (item) => item.theme.toLowerCase() === color.value.toLowerCase()
    ),
  }));
}
