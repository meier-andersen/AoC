export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += tryLine(line);
  });
  return res;
};

const tryLine = (line) => {
  const sum = line.sum;
  const firstNum = line.numbers.shift();
  const queue = [{ curr: firstNum, numbers: [...line.numbers] }];

  while (queue.length > 0) {
    const curr = queue.shift();
    const nextNum = curr.numbers.shift();
    const multiplyNum = curr.curr * nextNum;
    const addNum = curr.curr + nextNum;
    if (curr.numbers.length === 0) {
      if (multiplyNum === sum || addNum === sum)
        return sum;
    } else {
      if (multiplyNum <= sum) {
        queue.push({ curr: multiplyNum, numbers: [...curr.numbers] });
      }
      if (addNum <= sum) {
        queue.push({ curr: addNum, numbers: [...curr.numbers] });
      }
    }
  }
  return 0;
};
