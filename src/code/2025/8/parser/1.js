export const parse = (input) => {
  const data = [];
  let id = 0;
  input.forEach((element) => {
    element = element.split(",");
    data.push({
      x: parseInt(element[0]),
      y: parseInt(element[1]),
      z: parseInt(element[2]),
      id,
      group: -1,
    });
    id++;
  });
  return data;
};
