export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(": ");
    data.push({
      id: element[0],
      out: element[1].split(" "),
    });
  });
  return data;
};
