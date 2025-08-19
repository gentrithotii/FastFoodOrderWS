export function formatCurrency(number) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "SEK",
  }).format(number);
}
