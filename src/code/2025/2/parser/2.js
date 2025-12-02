export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(",");
    element.forEach((line) => {
      line = line.split("-");
      data.push({
        f: parseInt(line[0]),
        t: parseInt(line[1]),
      });
    });
  });
  return data;
};
