export const parse = (input) => {
  let data = [];
  input.forEach((element) => {
    data = Array.from(element);
  });
  return data;
};
