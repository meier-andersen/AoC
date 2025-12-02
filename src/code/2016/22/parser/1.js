export const parse = (input) => {
  const data = [];
  const regex = /\/dev\/grid\/node-x(\d+)-y(\d+)\s+(\d+)T\s+(\d+)T\s+(\d+)T\s+(\d+)%/;

  input.forEach((element) => {
    const match = element.match(regex);
    if(match) {
      const [, x, y, size, used, avail, usePercent] = match;
      const obj = {
        x: parseInt(match[1]), 
        y: parseInt(match[2]),
        size: parseInt(match[3]),
        used: parseInt(match[4]),
        avail: parseInt(match[5]),
        usePercentace: parseInt(match[6])
      }
      data.push(obj);
    }
  });
  return data;
};
