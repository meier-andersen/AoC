export const run = (input) => {
  const res = findLines(input.trans, input.str);
  return res;
};

const findLines = (trans, str) => {
  const matches = new Map();

  trans.forEach((transition) => {
    const indexes = findAllIndexes(str, transition.from);
    indexes.forEach((index) => {
      const key = str.substring(0, index) + transition.to + str.substring(index + transition.from.length);
      if (!matches.has(key)) matches.set(key, true);
    });
  });
  return matches.size;
};

const findAllIndexes = (str, tran) => {
  const indexes = [];
  let startIndex = 0;

  while ((startIndex = str.indexOf(tran, startIndex)) !== -1) {
    indexes.push(startIndex);
    startIndex += tran.length;
  }

  return indexes;
};
