export const run = (input) => {
  return findElf(input);
};

const findElf = num => {
  const p = Math.pow(3, Math.floor(Math.log(num) / Math.log(3)));
  if (num <= 2 * p) 
    return num - p;

  return 2 * num - 3 * p;
}