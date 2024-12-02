export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    const nums = element.split(" ");
    const line = [];
    nums.forEach((x) => {
      line.push(parseInt(x));
    });
    data.push(line);
  });
  return data;
};
