export const run = (input) => {
  let res = 0;

  input.forEach((p) => {
    p.sort((a, b) => a - b);
    res += p[0] * p[1] * p[2];
    res += 2 * p[0] + 2 * p[1];
  });

  return res;
};
