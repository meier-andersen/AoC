export const parse = (input) => {
  const data = new Map();

  for (let [index, elem] of input.entries()) {
    elem = elem.split(",");
    data.set(`${elem[1]},${elem[0]}`, index);
  }
  return data;
};
