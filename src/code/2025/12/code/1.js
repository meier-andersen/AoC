export const run = (input) => {
  let res = 0;

  input.spaces.forEach((space) => {
    res += runSingleSpace(space, input.packages);
  });
  return res;
};

const runSingleSpace = (space, packages) => {
  let size = 0;
  for (let i = 0; i < space.places.length; i++) {
    size += space.places[i] * packages[i].size;
  }

  return space.area > size ? 1 : 0;
};
