export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.replace("]", "").split("[");
    const index = element[0].lastIndexOf('-');
    const left = element[0].substring(0, index);
    const right = parseInt(element[0].substring(index + 1));

    const obj = {
      name: left,
      sector: right,
      sum: element[1]
    }
    data.push(obj);
  });
  return data;
};
