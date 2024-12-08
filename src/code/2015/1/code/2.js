export const run = (input) => {
  let res = 0;
  for (let i = 0; i < input.length; i++) {
    let elem = input[i];
    res += elem === "(" ? 1 : -1;

    if (res === -1) return i + 1;
  }
  return res;
};
