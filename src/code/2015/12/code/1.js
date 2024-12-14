export const run = (input) => {
  const numbers = input.match(/-?\d+/g).map(x => parseInt(x));
  return numbers.reduce((acc, num) => acc + num, 0);
};
