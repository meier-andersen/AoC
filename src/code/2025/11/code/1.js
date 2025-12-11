export const run = (input) => {
  seen = new Map();
  const res = findPaths(input);
  return res;
};

let seen;

const findPaths = (servers) => {
  return findRecursive(servers, "you");
};

const findRecursive = (servers, next) => {
  if (next === "out") return 1;

  if(seen.has(next))
    return seen.get(next);

  let paths = 0;

  const curr = servers.find((x) => x.id === next);
  curr.out.forEach((output) => {
    paths += findRecursive(servers, output);
  });

  seen.set(next, paths);

  return paths;
};
