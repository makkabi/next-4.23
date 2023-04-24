export function getFormattedPrice(price: number, currencySymbol = ' €') {
  const formattedPrice =
    (price / 100).toFixed(2).replace('.', ',') + currencySymbol;

  return formattedPrice;
}
