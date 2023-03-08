export const counter = (() => {
  let count = 0;
  return {
    next: () => ++count,
  };
})();
