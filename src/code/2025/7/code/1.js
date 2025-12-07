export const run = (input) => {
  const res = runSimulation(input);
  return res;
};

const runSimulation = (data) => {
  let res = 0;
  let rays = [{ c: data.start, v: 1 }];

  for (let r = 0; r <= data.length; r++) {
    const newRays = [];

    rays.forEach((ray) => {
      const key = `${r},${ray.c}`;
      if (data.splitters.has(key)) {
        addOrMergeRay(newRays, ray.c - 1, ray.v);
        addOrMergeRay(newRays, ray.c + 1, ray.v);
        res++;
      } else addOrMergeRay(newRays, ray.c, ray.v);
    });

    rays = newRays;
  }
  return res;
};

const addOrMergeRay = (rays, column, num) => {
  const ray = rays.find((x) => x.c === column);
  if (ray) ray.v += num;
  else rays.push({ c: column, v: num });
};
