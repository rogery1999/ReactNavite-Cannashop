export const parseInteger = (size: number) => parseInt(size.toFixed(0), 10);
export const round = (number: number, precision = 1000) =>
  Math.round(number / precision) * precision;
