export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += tryLine(line.a, line.b, line.price);
  });
  return res;
};

const tryLine = (a, b, p) => {
  const x = (p.x * b.y - p.y * b.x) / (a.x * b.y - a.y * b.x);
  const y = (a.x * p.y - a.y * p.x) / (a.x * b.y - a.y * b.x);

  if (x % 1 === 0 && y % 1 === 0) {
    return x * 3 + y;
  }

  return 0;
};
