export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split("-");
    data.push(
      {
        from: parseInt(element[0]), 
        to: parseInt(element[1])
      });
  });
  return data;
};
