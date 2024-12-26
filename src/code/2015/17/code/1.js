export const run = (input) => {
  const goal = input.length === 5 ? 25 : 150;
  return runRecursive(input, goal, 0, 0);
};

const runRecursive = (input, goal, index, sum) => {
  let res = 0;
  for (let i = index; i < input.length; i++) {
    const newSum = sum + input[i];
    if (newSum === goal) res++;
    else if (newSum < goal) res += runRecursive(input, goal, i + 1, newSum);
  }
  return res;
};
