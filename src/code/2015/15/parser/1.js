export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(": ");
    const obj = {
      name: element[0],
    };
    element = element[1].split(", ");
    element.forEach((ing) => {
      ing = ing.split(" ");
      obj[ing[0]] = parseInt(ing[1]);
    });

    data.push(obj);
  });
  return data;
};
