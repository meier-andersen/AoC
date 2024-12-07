export const run = (input) => {
  let res = 0;
  for (let i = 0; i < input.length; i++) {
    console.log(
      `Running: ${i} of ${input.length} - ${input[i].sum}, ${input[i].numbers}`
    );
    res += tryLine(input[i]);
  }
  return res;
};

const tryLine = (line) => {
  const sum = line.sum;
  const firstNum = line.numbers.shift();
  const queue = [{ curr: firstNum, numbers: [...line.numbers] }];

  while (queue.length > 0) {
    const curr = queue.shift();
    const nextNum = curr.numbers.shift();
    const combineNum = parseInt(`${curr.curr}${nextNum}`);
    const multiplyNum = curr.curr * nextNum;
    const addNum = curr.curr + nextNum;
    if (curr.numbers.length === 0) {
      if (multiplyNum === sum || addNum === sum || combineNum === sum)
        return sum;
    } else {
      if (multiplyNum <= sum)
        queue.push({ curr: multiplyNum, numbers: [...curr.numbers] });
      if (addNum <= sum)
        queue.push({ curr: addNum, numbers: [...curr.numbers] });
      if (combineNum <= sum)
        queue.push({ curr: combineNum, numbers: [...curr.numbers] });
    }
  }
  return 0;
};
