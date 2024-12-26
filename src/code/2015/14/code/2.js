export const run = (input) => {
  runSimulation(input);
  return findWinner(input);
};

const findWinner = (deers) => {
  return deers.reduce((max, deer) => (deer.points > max ? deer.points : max), 0);
};

const runSimulation = (deers) => {
  for (let i = 1; i <= 2503; i++) {
    let maxDist = 0;
    deers.forEach((deer) => {
      const newDist = runReindeer(deer, i);
      if (newDist > maxDist) maxDist = newDist;
    });

    deers.forEach((deer) => {
      if (deer.currDistance === maxDist) deer.points++;
    });
  }
};

const runReindeer = (deer, dist) => {
  const loopTime = deer.time + deer.rest;
  const distPerCycle = deer.speed * deer.time;
  const remainder = dist % loopTime;
  const remainderDist = remainder > deer.time ? distPerCycle : deer.speed * remainder;
  deer.currDistance = Math.floor(dist / loopTime) * distPerCycle + remainderDist;
  return deer.currDistance;
};
