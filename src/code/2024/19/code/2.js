export const run = (input) => {
  let res = 0;
  input.designs.forEach((design) => {
    memory = {};
    res += runTowelRecuring(design, input.towels, 0)
  });

  return res;
};

let memory;

const runTowelRecuring = (towel, patterns, pos) => {
  if (memory[pos] !== undefined) return memory[pos];
  if (pos === towel.length) return 1;

  const matches = patterns.filter((p) => p.every((p, i) => towel[pos + i] === p));
  let res = 0;
  matches.forEach((p) => {
    res += runTowelRecuring(towel, patterns, pos + p.length);
  });
  memory[pos] = res;
  return res;
};
