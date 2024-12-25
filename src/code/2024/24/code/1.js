export const run = (input) => {
  runSimulation(input.wires, input.gates);
  return findRes(input.wires);
};

const findRes = (wires) => {
  wires = wires.filter((x) => x.id[0] === "z");
  wires.sort((a, b) => {
    const numA = parseInt(a.id.slice(1), 10);
    const numB = parseInt(b.id.slice(1), 10);
    return numB - numA;
  });

  let binary = "";
  wires.forEach((x) => {
    binary = `${binary}${x.state}`;
  });

  return parseInt(binary.toString(), 2);
};

const runSimulation = (wires, gates) => {
  while (wires.filter((x) => x.id[0] === "z" && x.state === null).length > 0) {
    for (let i = 0; i < gates.length; i++) {
      const curr = gates[i];
      const inp1 = wires.find((x) => x.id === curr.inp1);
      const inp2 = wires.find((x) => x.id === curr.inp2);
      const out = wires.find((x) => x.id === curr.out);
      if (inp1.state !== null && inp2.state !== null) {
        switch (curr.type) {
          case "AND":
            out.state = inp1.state && inp2.state;
            break;
          case "OR":
            out.state = inp1.state || inp2.state;
            break;
          case "XOR":
            out.state = inp1.state !== inp2.state ? 1 : 0;
            break;
        }
        gates.splice(i, 1);
      }
    }
  }
};
