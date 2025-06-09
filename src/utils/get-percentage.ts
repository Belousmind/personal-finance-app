export default function getPercentage(current: number, total: number) {
  if (total === 0) return 0;

  const percentage = (current / total) * 100;
  return percentage;
}
