const MILLION = 1_000_000;
const THOUSAND = 1_000;

export const minimizeNumber = (number: number): string => {
  if (number >= 1000000) {
    return `${(number / MILLION).toFixed(1)}M`;
  }
  if (number >= THOUSAND) {
    return `${(number / THOUSAND).toFixed(1)}K`;
  }
  return number.toString();
};
