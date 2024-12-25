export const run = (input) => {
  let res = 0;
  input.keys.forEach((key) => {
    res += tryKey(key, input.locks);
  });
  return res;
};

let tryKey = (key, locks) => {
  let res = 0;
  locks.forEach((lock) => {
    for (let i = 0; i < lock.length; i++) {
      const v = key[i] + lock[i];
      if (v >= 6) return;
    }
    res++;
  });
  return res;
};
