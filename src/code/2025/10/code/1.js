export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += runLine(line);
  });
  return res;
};

const runLine = (line) => {
  const queue = [{ state: line.lg.replaceAll("#", "."), steps: 0 }];
  const seen = new Set();

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    for (const btn of line.btns) {
      const newState = pressBtn(curr.state, btn);
      if (!seen.has(newState)) {
        seen.add(newState);
        if (newState === line.lg) return curr.steps + 1;

        queue.push({ state: newState, steps: curr.steps + 1 });
      }
    }
  }

  return -1;
};

const pressBtn = (state, btn) => {
  let newState = state;
  btn.forEach((val) => {
    const newVal = newState[val] === "." ? "#" : ".";
    newState = newState.slice(0, val) + newVal + newState.slice(val + 1);
  });

  return newState;
};
