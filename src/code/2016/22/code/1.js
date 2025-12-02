export const run = (input) => {
  if(input.length === 0)
    return -1;
  return findPairs(input);
};

const findPairs = data => {
  let matches = 0;

  for(const a of data) {
    if(a.used === 0) 
        continue;

    for(const b of data) {
      if(isSame(a,b)) 
        continue;
      
      if(a.used <= b.avail) {
        matches++;      
      } else {
      }
    }
  }

  return matches;
}

const isSame = (a, b) => {
  return (a.x === b.x && a.y === b.y);
}