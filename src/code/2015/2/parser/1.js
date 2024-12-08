export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    data.push(element.split("x").map((x) => parseInt(x)));
  });
  return data;
};
