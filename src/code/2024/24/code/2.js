export const run = (input) => {
  const matches = runSimulation(input.gates);
  return matches.sort().join(",");
};

const returnOut = (gates, inp1, inp2, type) => {
  return gates.find(
    (x) => x.type === type && ((x.inp1 === inp1 && x.inp2 === inp2) || (x.inp1 === inp2 && x.inp2 === inp1))
  )?.out;
};

const getLength = (gates) => {
  const filteredGates = gates.filter((x) => x.inp1[0] === "x" && x.inp2[0] === "y").map((x) => x.inp1);
  filteredGates.sort();
  return parseInt(filteredGates[filteredGates.length - 1].slice(1));
};

const runSimulation = (gates) => {
  const matches = [];
  let con0 = null;
  for (let i = 0; i < getLength(gates); i++) {
    const n = i >= 10 ? `${i}` : `0${i}`;
    let zXor, zAnd, con1, con2, con3;

    zXor = returnOut(gates, `x${n}`, `y${n}`, "XOR");
    zAnd = returnOut(gates, `x${n}`, `y${n}`, "AND");

    if (con0) {
      con3 = returnOut(gates, con0, zXor, "AND");
      if (!con3) {
        [zAnd, zXor] = [zXor, zAnd];
        matches.push(zXor, zAnd);
        con3 = returnOut(gates, con0, zXor, "AND");
      }

      con2 = returnOut(gates, con0, zXor, "XOR");

      if (zAnd?.startsWith("z")) {
        [zAnd, con2] = [con2, zAnd];
        matches.push(zAnd, con2);
      }

      if (con3?.startsWith("z")) {
        [con3, con2] = [con2, con3];
        matches.push(con3, con2);
      }

      if (zXor?.startsWith("z")) {
        [zXor, con2] = [con2, zXor];
        matches.push(zXor, con2);
      }

      con1 = returnOut(gates, con3, zAnd, "OR");
    }

    if (con1?.startsWith("z")) {
      [con1, con2] = [con2, con1];
      matches.push(con1, con2);
    }

    con0 = con0 ? con1 : zAnd;
  }

  return matches;
};
