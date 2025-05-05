export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('cs-CZ').format(price);
};