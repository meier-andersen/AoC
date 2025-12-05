export const parse = (input) => {
  const data = [];

  input.forEach((element) => {
    if (element.includes("-")) {
      element = element.split("-");
      data.push({
        s: parseInt(element[0]),
        e: parseInt(element[1]),
      });
    }
  });
  return data;
};
