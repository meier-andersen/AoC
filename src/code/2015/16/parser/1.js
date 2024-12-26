export const parse = (input) => {
  const data = [];
  let i = 0;
  input.forEach((element) => {
    i++;
    element = element.split(", ");
    const split = element[0].split(": ");
    element[0] = `${split[1]}: ${split[2]}`;
    const obj = {
      name: i,
    };
    element.forEach((item) => {
      item = item.split(": ");
      obj[item[0]] = parseInt(item[1]);
    });
    data.push(obj);
  });
  return data;
};
