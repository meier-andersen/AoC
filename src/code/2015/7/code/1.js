export const run = (input) => {
  const gates = input.gates;
  const operations = input.opr;

  let sizeBefore = operations.length;
  let sizeAfter = null;
  while (sizeBefore !== sizeAfter) {
    sizeBefore = operations.length;
    for (let i = 0; i < operations.length; i++) {
      const action = operations[i].action;
      if (action.includes("AND")) handleAnd(i, operations, gates);
      else if (action.includes("OR")) handleOr(i, operations, gates);
      else if (action.includes("LSHIFT")) handleLShift(i, operations, gates);
      else if (action.includes("RSHIFT")) handleRShift(i, operations, gates);
      else if (action.includes("NOT")) handleNot(i, operations, gates);
      else handleElse(i, operations, gates);
    }
    sizeAfter = operations.length;
  }

  return calcRes(gates);
};

const calcRes = (gates) => {
  const findA = gates.find((x) => x.id === "a");
  if (findA) return findA.val;

  return gates.find((x) => x.id === "h").val;
};

const handleAnd = (i, operations, gates) => {
  const opr = operations[i];
  const remainder = opr.action.replace("AND ", "").split(" ");
  const matchL = !isNaN(Number(remainder[0]))
    ? { val: Number(remainder[0]) }
    : gates.find((x) => x.id === remainder[0]);
  const matchR = !isNaN(Number(remainder[1]))
    ? { val: Number(remainder[1]) }
    : gates.find((x) => x.id === remainder[1]);

  if ((matchL.val || matchL.val === 0) && (matchR.val || matchR.val === 0)) {
    const gate = gates.find((x) => x.id === opr.gate);
    gate.val = matchL.val & matchR.val;
    operations.splice(i, 1);
  }
};

const handleOr = (i, operations, gates) => {
  const opr = operations[i];
  const remainder = opr.action.replace("OR ", "").split(" ");
  const matchL = !isNaN(Number(remainder[0]))
    ? { val: Number(remainder[0]) }
    : gates.find((x) => x.id === remainder[0]);
  const matchR = !isNaN(Number(remainder[1]))
    ? { val: Number(remainder[1]) }
    : gates.find((x) => x.id === remainder[1]);

  if ((matchL.val || matchL.val === 0) && (matchR.val || matchR.val === 0)) {
    const gate = gates.find((x) => x.id === opr.gate);
    gate.val = matchL.val | matchR.val;
    operations.splice(i, 1);
  }
};

const handleLShift = (i, operations, gates) => {
  const opr = operations[i];
  const remainder = opr.action.replace("LSHIFT ", "").split(" ");
  const match = !isNaN(Number(remainder[0]))
    ? { val: Number(remainder[0]) }
    : gates.find((x) => x.id === remainder[0]);

  if (match.val || match.val === 0) {
    const gate = gates.find((x) => x.id === opr.gate);
    gate.val = match.val << parseInt(remainder[1]);
    operations.splice(i, 1);
  }
};

const handleRShift = (i, operations, gates) => {
  const opr = operations[i];
  const remainder = opr.action.replace("RSHIFT ", "").split(" ");
  const match = !isNaN(Number(remainder[0]))
    ? { val: Number(remainder[0]) }
    : gates.find((x) => x.id === remainder[0]);

  if (match.val || match.val === 0) {
    const gate = gates.find((x) => x.id === opr.gate);
    gate.val = match.val >> parseInt(remainder[1]);
    operations.splice(i, 1);
  }
};

const handleNot = (i, operations, gates) => {
  const opr = operations[i];
  const remainder = opr.action.replace("NOT ", "");
  const match = !isNaN(Number(remainder))
    ? { val: Number(remainder) }
    : gates.find((x) => x.id === remainder);
  if (match.val || match.val === 0) {
    const gate = gates.find((x) => x.id === opr.gate);
    gate.val = 65536 + ~match.val;
    operations.splice(i, 1);
  }
};

const handleElse = (i, operations, gates) => {
  const opr = operations[i];
  const match = !isNaN(Number(opr.action))
    ? { val: Number(opr.action) }
    : gates.find((x) => x.id === opr.action);
  if (match.val || match.val === 0) {
    const gate = gates.find((x) => x.id === opr.gate);
    gate.val = match.val;
    operations.splice(i, 1);
    i--;
  }
};
