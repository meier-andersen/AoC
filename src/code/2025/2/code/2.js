export const run = (input) => {
  let res = 0;

  input.forEach((elem) => {
    res += tryRange(elem);
  });

  return res;
};

const tryRange = (range) => {
  let res = 0;
  for (let num = range.f; num <= range.t; num++) {
    res += tryNumber(`${num}`);
  }

  return res;
};

const tryNumber = (number) => {
  for (let length = 1; length <= number.length / 2; length++) {
    const currRes = tryLengthOnNumber(number, length);
    if (currRes) return currRes;
  }
  return 0;
};

const tryLengthOnNumber = (number, length) => {
  const target = number.slice(0, length);
  for (let i = length; i < number.length; i += length) {
    const curr = number.slice(i, length + i);
    if (curr !== target) return null;
  }
  return parseInt(number);
};
