export const parse = (input) => {
  let data;
  input.forEach((element) => {
    data = parseInt(element);
  });
  return data;
};
