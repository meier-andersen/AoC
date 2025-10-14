export const run = (input) => {
  return findRes(input);
};

const findRes = numbers => {
  let res = 0;

  numbers.forEach(num => {
    if((num.x < num.y + num.z) && (num.y < num.x + num.z) && (num.z < num.x + num.y))
      res++;
  })

  return res;
}