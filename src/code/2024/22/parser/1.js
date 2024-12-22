export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    data.push(parseInt(element));
  });
  return data;
};
