const BILLION = 1_000_000_000;
const MILLION = 1_000_000;
const THOUSAND = 1000;

export const minimizeNumber = (number: number): string => {
  if (number >= BILLION) {
    return `${(number / BILLION).toFixed(1)}B`;
  }
  if (number >= MILLION) {
    return `${(number / MILLION).toFixed(1)}M`;
  }
  if (number >= THOUSAND) {
    return `${(number / THOUSAND).toFixed(1)}K`;
  }
  return number.toString();
};
