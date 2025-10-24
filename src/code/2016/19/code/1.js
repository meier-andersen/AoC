export const run = (input) => {
  return findElf(input);
};

const findElf = num => {
  const p = Math.pow(2, Math.floor(Math.log2(num)));
  return 2 * (num - p) + 1;
}