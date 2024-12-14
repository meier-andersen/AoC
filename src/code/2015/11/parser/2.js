export const parse = (input) => {
  let data = [];
  input.forEach((element) => {
    data = element.split("");
  });
  return data;
};
