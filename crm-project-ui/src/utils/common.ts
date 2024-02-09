export const isEmpty = (value: string | null | undefined) => {
  return value === "" || value === null || value === undefined;
};

export const isUndefined = (value: any) => {
  if (value == undefined || value <= 0) {
    return true;
  }
};
