export const hasEmptyProp = (obj) => {
  if (!obj) return;

  for (const prop in obj) {
    if (!obj[prop]) return true;
  }

  return false;
};
