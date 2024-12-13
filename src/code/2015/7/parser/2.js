export const parse = (input) => {
  const data = {
    gates: [],
    opr: []
  };
  input.forEach((element) => {
    element = element.split(" -> ");
    data.gates.push({ id: element[1], val: null});
    data.opr.push({action: element[0], gate: element[1]})
  });
  return data;
};
