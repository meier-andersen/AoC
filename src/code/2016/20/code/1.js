export const run = (input) => {
  return findAll(input);
};

const findAll = ranges => {
  ranges.sort((a, b) => (a.from - b.from));
  mergeRanges(ranges);

  
  return ranges[0].to+1;
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