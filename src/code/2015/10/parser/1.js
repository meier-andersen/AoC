export const parse = (input) => {
  let data = [];
  input.forEach((element) => {
    data = element.split("").map((x) => parseInt(x));
  });
  return data;
};
