export const parse = (input) => {
  const data = {
    ranges: [],
    food: [],
  };

  input.forEach((element) => {
    if (!element) return;

    if (element.includes("-")) {
      element = element.split("-");
      data.ranges.push({
        s: parseInt(element[0]),
        e: parseInt(element[1]),
      });
    } else {
      data.food.push(parseInt(element));
    }
  });
  return data;
};
