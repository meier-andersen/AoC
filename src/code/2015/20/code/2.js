export const run = (input) => {
  return findHouse(input);
};

const findHouse = (target) => {
  const multiplier = 11;
  const max = Math.ceil(target / multiplier);
  const presents = Array(max).fill(0);

  for (let worker = 1; worker < max; worker++) {
    for (let i = 1; i <= 50; i++) {
      const house = worker * i;
      if (house <= presents.length) presents[house] += multiplier * worker;
    }
  }

  for (let house = 1; house < max; house++) {
    if (presents[house] >= target) return house;
  }

  return -1;
};
