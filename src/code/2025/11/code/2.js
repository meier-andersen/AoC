export const run = (input) => {
  seen = new Map();
  const res = findPaths(input);
  return res;
};

let seen;

const findPaths = (servers) => {
  return findRecursive(servers, "svr", false, false);
};

const findRecursive = (servers, next, seenDac, seenFft) => {
  if (next === "out") return seenDac && seenFft ? 1 : 0;

  const key = generateKey(next, seenDac, seenFft);

  if (seen.has(key)) {
    return seen.get(key);
  }

  if (next === "dac") seenDac = true;
  if (next === "fft") seenFft = true;

  let paths = 0;

  const curr = servers.find((x) => x.id === next);
  curr.out.forEach((output) => {
    paths += findRecursive(servers, output, seenDac, seenFft);
  });

  seen.set(key, paths);

  return paths;
};

const generateKey = (next, seenDac, seenFft) => {
  return `${next}-${seenDac}-${seenFft}`;
};
