export function subtractDays(date: Date | string, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

export function addDays(date: Date | string, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function days(
  date: Date | string,
  days: number,
  opt: "add" | "subtract" = "add"
) {
  let result = new Date(date);
  if (opt === "add") result.setDate(result.getDate() + days);
  else result.setDate(result.getDate() - days);
  return result;
}

export function format(date: Date) {
  if (!date) return;
  return date.toISOString().split("T")[0];
}
