export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(",");
    data.push({
      r: parseInt(element[0]),
      c: parseInt(element[1]),
    });
  });
  return data;
};
