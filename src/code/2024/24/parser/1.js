export const parse = (input) => {
  const data = {
    wires: [],
    gates: [],
  };
  let wireMode = true;
  input.forEach((element) => {
    if (!element) wireMode = false;
    else if (wireMode) {
      element = element.split(": ");
      data.wires.push({ id: element[0], state: parseInt(element[1]) });
    } else {
      element = element.split(" -> ");
      if (!data.wires.find((x) => x.id === element[1])) {
        data.wires.push({ id: element[1], state: null });
      }
      const gate = element[0].split(" ");
      data.gates.push({ inp1: gate[0], inp2: gate[2], type: gate[1], out: element[1] });
    }
  });
  return data;
};
