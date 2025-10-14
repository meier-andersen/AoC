export const run = (input) => {
  const res = findRes(input);
  return res;
};

const findRes = code => {
  let res = "";

  let r = 2;
  let c = 0;
  code.forEach(line => {
    line.forEach(ins => {
      switch(ins) {
        case "U": 
          if(r>0 && numPad[r-1][c] !== " ") r--;
        break;
        case "D": 
          if(r<4 && numPad[r+1][c] !== " ") r++;
        break;
        case "L":
          if(c>0 && numPad[r][c-1] !== " ") c--;
        break;
        case "R":
          if(c<4 && numPad[r][c+1] !== " ") c++;
        break;
      }
    })
    res = `${res}${numPad[r][c]}`;
  })

  return res;
}

const numPad = [
  [" ", " ", "1", " ", " "],
  [" ", "2", "3", "4", " "], 
  ["5", "6", "7", "8", "9"],
  [" ", "A", "B", "C", " "],
  [" ", " ", "D", " ", " "],
]