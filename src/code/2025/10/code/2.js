export const run = (input) => {
  let res = 0;
  console.log(input[0]);

  for(let i = 0; i < input.length; i++) {
    console.log(`Running ${i} of ${input.length}`)
    res += runLine(input[i]);
  }
  return res;
};

const runLine = (line) => {
  let state = [];
  line.jol.forEach((x) => {
    state.push(0);
  });
  const queue = [{ state, steps: 0 }];
  const seen = new Set();

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    for (const btn of line.btns) {
      const newState = pressBtn(curr.state, btn);
      if (!areAnyTooHigh(line.jol, newState)) {
        const key = arrToKey(newState);
        if (!seen.has(key)) {
          seen.add(key);
          if (line.jol.every((val, i) => val === newState[i])) return curr.steps + 1;

          queue.push({ state: newState, steps: curr.steps + 1 });
        }
      }
    }
  }

  return -1;
};

const areAnyTooHigh = (goal, newState) => {
  for (let i = 0; i < goal.length; i++) {
    if(newState[i] > goal[i])
      return true;
  }

  return false;
};

const arrToKey = (state) => {
  let str = "";
  state.forEach((state) => {
    str += `${state},`;
  });
  return str;
};

const pressBtn = (state, btn) => {
  let newState = [...state];
  btn.forEach((val) => {
    newState[val]++;
  });

  return newState;
};
