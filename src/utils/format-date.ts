export default function formattedDate(isoDate: string) {
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
