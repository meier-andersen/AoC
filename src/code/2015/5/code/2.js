export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += tryLine(line);
  });
  return res;
};

const tryLine = (line) => {
  let pairs = [];
  let hasSkipMatch = false;
  let hasPairMatch = false;

  for (let i = 0; i < line.length; i++) {
    if (!hasPairMatch) {
      if (line[i + 2] === line[i]) hasSkipMatch = true;
    }

    if (!hasPairMatch) {
      const pair = `${line[i]}${line[i + 1]}`;
      if (pairs.find((x, index) => x === pair && index !== pairs.length - 1))
        hasPairMatch = true;
      pairs.push(pair);
    }

    if (hasSkipMatch && hasPairMatch) return 1;
  }

  return 0;
};
