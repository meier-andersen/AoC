export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    data.push(element.split("").map(x => ({val: x, farm: -1})));
  });
  return data;
};
