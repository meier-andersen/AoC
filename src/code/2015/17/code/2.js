export const run = (input) => {
  const goal = input.length === 5 ? 25 : 150;
  const res = runRecursive(input, goal, 0, 0, []);
  res.sort((a, b) => a.length - b.length);
  return res.filter((x) => x.length === res[0].length).length;
};

const runRecursive = (input, goal, index, sum, steps) => {
  let res = [];
  for (let i = index; i < input.length; i++) {
    const newSum = sum + input[i];
    const newSteps = [...steps].concat(input[i]);
    if (newSum === goal) {
      res.push(newSteps);
    } else if (newSum < goal) {
      res = res.concat(runRecursive(input, goal, i + 1, newSum, newSteps));
    }
  }
  return res;
};
