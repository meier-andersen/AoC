export const run = (input) => {
  let res = 0;

  input.forEach((p) => {
    const arr = [p[0] * p[1], p[0] * p[2], p[1] * p[2]];
    res += arr.sort((a, b) => a - b)[0];
    arr.forEach((x) => {
      res += 2 * x;
    });
  });

  return res;
};
