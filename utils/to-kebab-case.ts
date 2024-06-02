export const toKebabCase = (str: string) => {
  return str
    .match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("-");
};
