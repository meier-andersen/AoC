export const run = (input) => {
  const res = findNumber(input.r, input.c);
  return res;
};

const findNumber = (row, col) => {
  let currNum = 20151125;
  let currR = 1;
  let currC = 1;
  let maxRow = 1;

  while(true)
  {
    currR--;
    currC++;
    if(currR === 0) 
    {
      currC = 1;
      maxRow++;
      currR = maxRow;
    }
    currNum = (currNum * 252533) % 33554393;

    if(currR === row && currC === col)
      return currNum;
  }
}