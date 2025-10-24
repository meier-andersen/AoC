export const run = (input) => {
  const length = input === "10000" ? 20 : 35651584;
  let data = input;
  while(data.length < length) {
    data = runDragon(data);
  }
  data = data.slice(0, length);

  return findCheckSum(data)
};

const runDragon = currStr => {
  const newStr = [];
  for(let i = currStr.length - 1; i >= 0; i--) {
    newStr.push(currStr[i] === "1" ? "0" : "1");
  }

  return `${currStr}0${newStr.join("")}`
}

const findCheckSum = (checkSum) => {
  while(checkSum.length % 2 === 0) 
  {
    const out = [];
    for(let i = 0; i < checkSum.length; i+=2) {
      out.push(checkSum[i] === checkSum[i+1] ? "1" : "0");
    }
    checkSum = out.join("");
  }
  return checkSum;
}