export const run = (input) => {
  const state = {
    regA: 0,
    regB: 0,
    index: 0
  }

  while(true) 
  {
    if (state.index > input.length - 1)
      return state.regB;

    const curr = input[state.index];
    runIns(curr, state);
  }
};

const runIns = (curr, state) => {
  switch (curr.opr) {
    case "hlf": 
      return handleHlf(curr, state);
    case "tpl":
      return handleTpl(curr, state);
    case "inc":
      return handleInc(curr, state);
    case "jmp":
      return handleJmp(curr, state);
    case "jie":
      return handleJie(curr, state);
    case "jio":
      return handleJio(curr, state);
  }
}

const handleHlf = (curr, state) => {
  if(isRegA(curr.reg))
    state.regA = state.regA/2;
  else 
    state.regB = state.regB/2;
  state.index++;
}

const handleTpl = (curr, state) => {
  if(isRegA(curr.reg))
    state.regA = state.regA * 3;
  else
    state.regB = state.regB * 3;
  state.index++;
}

const handleJmp = (curr, state) => {
  state.index += curr.stp;
}

const handleInc = (curr, state) => {
  if(isRegA(curr.reg))
    state.regA++;
  else
    state.regB++;
  state.index++;
}

const handleJie = (curr, state) => {
  if(isRegA(curr.reg) && state.regA % 2 === 0) 
    state.index += curr.stp;
  else if(!isRegA(curr.reg) && state.regB % 2 === 0) 
    state.index += curr.stp;
  else 
    state.index++;
}

const handleJio = (curr, state) => {
  if(isRegA(curr.reg) && state.regA === 1) 
    state.index += curr.stp;
  else if(!isRegA(curr.reg) && state.regB === 1) 
    state.index += curr.stp;
  else 
    state.index++;
}

const isRegA = val => {
  return val === "a";
}