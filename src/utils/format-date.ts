export function formattedDate(isoDate: string) {
  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    return "";
  }

  const formatted = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatted;
}

export function formatMonthlyLabel(isoDate: string): string {
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return "";

  const day = date.getDate();

  const suffixes = ["th", "st", "nd", "rd"];
  const v = day % 100;
  const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];

  return `Monthly - ${day}${suffix}`;
}
