export const parse = (input) => {
  const data = new Map();

  const size = input.length > 100 ? 1024 : 12;

  for (let [index, elem] of input.entries()) {
    if (index >= size) return data;

    elem = elem.split(",");
    data.set(`${elem[1]},${elem[0]}`, true);
  }
  return data;
};
