export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += runSingleLine(line);
  });
  return res;
};

const runSingleLine = (line) => {
  const curr = parseInt(findNextDigit(line, 0, 12));
  return curr;
};

const findNextDigit = (line, nextIndex, numbersLeft) => {
  let digitIndex = -1;
  let digitValue = 0;

  for (let i = nextIndex; i < line.length - (numbersLeft - 1); i++) {
    const currValue = parseInt(line[i]);
    if (currValue > digitValue) {
      digitIndex = i;
      digitValue = currValue;
    }
  }

  if (numbersLeft === 1) return `${digitValue}`;

  return `${digitValue}${findNextDigit(line, digitIndex + 1, numbersLeft - 1)}`;
};
