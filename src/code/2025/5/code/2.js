export const run = (input) => {
  const ranges = findRanges(input);
  return calcScore(ranges);
};

const findRanges = (orgRanges) => {
  orgRanges.sort((a, b) => a.s - b.s);
  const newRanges = [];

  orgRanges.forEach((curr) => {
    const overlap = newRanges.find((x) => x.e >= curr.s);
    if (!overlap) newRanges.push(curr);
    else {
      if (curr.e > overlap.e) overlap.e = curr.e;
    }
  });

  return newRanges;
};

const calcScore = (ranges) => {
  let res = 0;

  ranges.forEach((range) => {
    res += range.e - range.s + 1;
  });
  return res;
};
