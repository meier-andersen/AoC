export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(" ");
    data.push({
      name: element[0],
      speed: parseInt(element[3]),
      time: parseInt(element[6]),
      rest: parseInt(element[13]),
      points: 0,
      currDistance: 0,
    });
  });
  return data;
};
