export const run = (input) => {
  const res = findRes(input);
  return res;
};

const findRes = code => {
  let res = "";

  let r = 1;
  let c = 1;
  code.forEach(line => {
    line.forEach(ins => {
      switch(ins) {
        case "U": 
          if(r>0) r--;
        break;
        case "D": 
          if(r<2) r++;
        break;
        case "L":
          if(c>0) c--;
        break;
        case "R":
          if(c<2) c++;
        break;
      }
    })
    res = `${res}${numPad[r][c]}`;
  })

  return parseInt(res);
}

const numPad = [
  [1, 2, 3],
  [4, 5, 6], 
  [7, 8, 9]
]