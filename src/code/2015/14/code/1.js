export const run = (input) => {
  let res = 0;
  input.forEach((deer) => {
    const distance = runReindeer(deer);
    if (distance > res) res = distance;
  });
  return res;
};

const runReindeer = (deer) => {
  const loopTime = deer.time + deer.rest;
  const distPerCycle = deer.speed * deer.time;
  const remainder = 2503 % loopTime;
  const remainderDist = remainder > deer.time ? distPerCycle : deer.speed * remainder;
  return Math.floor(2503 / loopTime) * distPerCycle + remainderDist;
};
