export const run = (input) => {
  let res = 0;

  input.food.forEach((food) => {
    const range = input.ranges.find((x) => x.s <= food && x.e >= food);
    if (range) res++;
  });
  return res;
};
