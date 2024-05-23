export const capitalize = (string: string): string | undefined => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : undefined;
};
