export const run = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (trySue(input[i])) return input[i].name;
  }
  return -1;
};

const trySue = (sue) => {
  if (sue.children !== undefined && sue.children !== req.children) return false;
  if (sue.cats !== undefined && sue.cats !== req.cats) return false;
  if (sue.samoyeds !== undefined && sue.samoyeds !== req.samoyeds) return false;
  if (sue.pomeranians !== undefined && sue.pomeranians !== req.pomeranians) return false;
  if (sue.akitas !== undefined && sue.akitas !== req.akitas) return false;
  if (sue.vizslas !== undefined && sue.vizslas !== req.vizslas) return false;
  if (sue.goldfish !== undefined && sue.goldfish !== req.goldfish) return false;
  if (sue.trees !== undefined && sue.trees !== req.trees) return false;
  if (sue.cars !== undefined && sue.cars !== req.cars) return false;
  if (sue.perfumes !== undefined && sue.perfumes !== req.perfumes) return false;

  return true;
};

const req = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};
