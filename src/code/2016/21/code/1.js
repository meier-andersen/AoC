export const run = (input) => {
  return runSteps(input);
};

const runSteps = instructions => {
  let code = instructions.length === 8 ? "abcde".split("") : "abcdefgh".split("");

  for(const ins of instructions) {
    switch(ins.type) {
      case "SwapPos":  swapPos(code, ins); break;
      case "SwapLet":   swapLet(code, ins); break;
      case "ReversePos": code = reversePos(code, ins); break;
      case "RotateLeft":  code = rotateLeft(code, ins); break;
      case "RotateRight":  code = rotateRight(code, ins); break;
      case "MovePos":  movePos(code, ins); break;
      case "RotatePosLetter":  code = rotatePosLetter(code, ins); break;
    }
  }

  return code.join("");
}

const swapPos = (code, ins) => {
  const temp = code[ins.pos1];
  code[ins.pos1] = code[ins.pos2];
  code[ins.pos2] = temp;
}

const swapLet = (code, ins) => {
  for(let i = 0; i < code.length; i++) {
    if(code[i] === ins.pos1) 
      code[i] = ins.pos2;
    else if(code[i] === ins.pos2) 
      code[i] = ins.pos1;
  }
}

const reversePos = (code, ins) => {
  const pre = ins.pos1 !== 0 ? code.slice(0, ins.pos1) : [];
  const mid = code.slice(ins.pos1, ins.pos2+1).reverse();
  const end = ins.pos2 !== code.length -1 ? code.slice(ins.pos2 + 1) : [];        
  code = pre.concat(mid).concat(end);
  return code;
}

const rotateLeft = (code, ins) => {
  return code.concat(code.splice(0, ins.steps));
}

const rotateRight = (code, ins) => {
  return code.concat(code.splice(0, code.length - ins.steps));
}

const movePos = (code, ins) => {
  const letter = code.splice(ins.pos1, 1);
  code.splice(ins.pos2, 0, letter[0]);
}

const rotatePosLetter = (code, ins) => {
  let index = code.findIndex(x => x === ins.pos1) + 1;
  if(index > 4) 
    index++;
  index = index % code.length;
  return code.concat(code.splice(0, code.length - index));
}