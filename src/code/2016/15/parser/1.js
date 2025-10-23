export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.replace("has ", "").replace("positions; at time=0, it is at position ", "").replace(".", "").replace("Disc #", "").split(" ");
    const obj = {
      id: parseInt(element[0]),
      size: parseInt(element[1]),
      start: parseInt(element[2])
    }
    data.push(obj);
  });
  return data;
};
