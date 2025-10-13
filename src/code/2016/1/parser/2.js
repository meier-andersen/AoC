export const parse = (input) => {
  const data = [];
  input = input[0].replaceAll(" ", "").split(",");
  input.forEach((element) => {
    const match = element.match(/^([A-Za-z])(\d+)$/);

    data.push({dir: match[1], val: parseInt(match[2], 10)});
  });
  return data;
};
