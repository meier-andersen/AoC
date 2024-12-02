export const run = (input) => {
  let res = 0;
  let l1 = input.l1.sort();
  let l2 = input.l2.sort();

  for (let i = 0; i < l1.length; i++) {
    res += Math.abs(l1[i] - l2[i]);
  }

  return res;
};
