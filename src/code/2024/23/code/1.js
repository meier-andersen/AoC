export const run = (input) => {
  let list = buildList(input);

  list = list.sort().filter((x) => x[0] === "t" || x[3] === "t" || x[6] === "t");
  return list.length;
};

const buildList = (input) => {
  const list = [];
  input.forEach((elem) => {
    const val1 = elem[0];
    const val2 = elem[1];
    const firstVal = input.filter((x) => x[0] === val1 || x[1] === val1);
    if (firstVal.length > 0) {
      for (let i = 0; i < firstVal.length; i++) {
        const other = firstVal[i].find((x) => x !== val1);
        const match = input.find((x) => (x[0] === val2 && x[1] === other) || (x[1] === val2 && x[0] === other));
        if (match) {
          const matchList = [val1, val2, other].sort().join(",");
          if (!list.find((x) => x === matchList)) list.push(matchList);
        }
      }
    }
  });
  return list;
};
