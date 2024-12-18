let rA, rB, rC, p, oprs;
export const run = (input) => {
  const goal = input.opr.join(",");
  let a = 0;
  while(true) {

    if(a % 1000000 === 0) 
      console.log(a);
    const res = tryValues(input.opr, a);
    if(res === goal)
      return a;
    a++;

    return
  }
};

const tryValues = (opr, a) => {
  let res = [];
  reset(opr, a);

  let i = 0;
  while (true) {
    i++;
    if(i > 200) {
      console.log("became too long")
      return -1;
    }
    const opcode = oprs[p];
    const opand = oprs[p + 1];

    if (opand === undefined) return res.join(",");

    switch (opcode) {
      case 0:
        handleAdv(opand);
        break;
      case 1:
        handleBxl(opand);
        break;
      case 2:
        handleBst(opand);
        break;
      case 3:
        handleJnz(opand);
        break;
      case 4:
        handleBxc(opand);
        break;
      case 5:
        res.push(handleOut(opand));
        break;
      case 6:
        handleBdv(opand);
        break;
      case 7:
        handleCdv(opand);
        break;
    }

    if (opcode !== 3 || rA === 0) p += 2;
  }
}

const handleAdv = (opand) => {
  rA = Math.trunc(rA / dv(opand));
};

const handleBxl = (opand) => {
  rB = rB ^ opand;
};

const handleBst = (opand) => {
  rB = getCombo(opand) & 7;
};

const handleJnz = (opand) => {
  if (rA === 0) return;
  p = opand;
};

const handleBxc = (opand) => {
  rB = rB ^ rC;
};

const handleOut = (opand) => {
  return getCombo(opand) & 7;
};

const handleBdv = (opand) => {
  rB = Math.trunc(rA / dv(opand));
};

const handleCdv = (opand) => {
  rC = Math.trunc(rA / dv(opand));
};

const dv = (opand) => {
  return Math.pow(2, getCombo(opand));
};

const getCombo = (opand) => {
  if (opand === 4) return rA;
  else if (opand === 5) return rB;
  else if (opand === 6) return rC;

  return opand;
};

const reset = (opr, a) => {
  p = 0;
  rA = a;
  rB = 0;
  rC = 0;
  oprs = opr;
};
