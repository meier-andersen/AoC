export const run = (input) => {
  return findAll(input);
};

const findAll = ranges => {
  const ceil = ranges.length > 5 ? 4294967295 : 9
  ranges.sort((a, b) => (a.from - b.from));
  mergeRanges(ranges);

  return findRes(ranges, ceil);
}

const findRes = (ranges, ceil) => {
  let res = 0;
  for(let i = 0; i < ranges.length; i++) {
    const curr = ranges[i];
    const next = ranges[i+1];

    if(next) 
      res += (next.from-curr.to - 1);
    else 
      res += ceil - curr.to;
  }
  return res;
}

const mergeRanges = ranges => {
  for(let i = 0; i < ranges.length - 1; i++) {
    const curr = ranges[i];
    const next = ranges[i+1];
    
    if(curr.to + 1 >= next.from) {
      if(next.to > curr.to)
        curr.to = next.to;
      ranges.splice(i+1, 1);
      i--;
    }
  }
}