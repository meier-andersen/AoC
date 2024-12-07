export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(": ");

    let obj = {
      sum: parseInt(element[0]),
      numbers: element[1].split(" ").map((x) => parseInt(x)),
    };
    data.push(obj);
  });
  return data;
};
