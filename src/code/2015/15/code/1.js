export const run = (input) => {
  const res = input.length > 2 ? runWith4(input) : runWith2(input);
  return res;
};

const runWith4 = (input) => {
  let max = 0;
  for (let first = 0; first <= 100; first++) {
    const forSecond = 100 - first;
    for (let second = 0; second <= forSecond; second++) {
      const forThird = 100 - first - second;
      for (let third = 0; third <= forThird; third++) {
        const fourth = 100 - first - second - third;

        let capacity =
          input[0].capacity * first +
          input[1].capacity * second +
          input[2].capacity * third +
          input[3].capacity * fourth;
        let durability =
          input[0].durability * first +
          input[1].durability * second +
          input[2].durability * third +
          input[3].durability * fourth;
        let flavor =
          input[0].flavor * first + input[1].flavor * second + input[2].flavor * third + input[3].flavor * fourth;
        let texture =
          input[0].texture * first + input[1].texture * second + input[2].texture * third + input[3].texture * fourth;

        if (capacity < 0) capacity = 0;
        if (durability < 0) durability = 0;
        if (flavor < 0) flavor = 0;
        if (texture < 0) texture = 0;

        const score = capacity * durability * flavor * texture;
        if (score > max) {
          max = score;
        }
      }
    }
  }
  return max;
};

const runWith2 = (input) => {
  let max = 0;
  for (let i = 0; i <= 100; i++) {
    const o = 100 - i;

    let capacity = input[0].capacity * i + input[1].capacity * o;
    let durability = input[0].durability * i + input[1].durability * o;
    let flavor = input[0].flavor * i + input[1].flavor * o;
    let texture = input[0].texture * i + input[1].texture * o;

    if (capacity < 0) capacity = 0;
    if (durability < 0) durability = 0;
    if (flavor < 0) flavor = 0;
    if (texture < 0) texture = 0;

    const score = capacity * durability * flavor * texture;
    if (score > max) {
      max = score;
    }
  }
  return max;
};
