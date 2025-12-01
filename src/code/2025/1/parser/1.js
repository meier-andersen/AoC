export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    const dir = element[0];
    const rest = element.substring(1);
    const obj = {
      dir,
      count: parseInt(rest)
    }

    data.push(obj);
  });
  return data;
};
