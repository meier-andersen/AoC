export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    const obj = {
      x: parseInt(element.substring(0, 5)),
      y: parseInt(element.substring(6, 10)),
      z: parseInt(element.substring(10))
    }
    data.push(obj);
  });
  return data;
};
