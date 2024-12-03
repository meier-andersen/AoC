export const run = (input) => {
  let pairs = [];
  let res = 0;

  input.forEach((line) => {
    const matches = line.match(/mul\(\d+,\d+\)/g);
    pairs = pairs.concat(matches);
  });

  pairs.forEach((pair) => {
    console.log(pair);
    pair = pair.replace("mul(", "").replace(")", "").split(",");
    res += parseInt(pair[0]) * parseInt(pair[1]);
  });
  return res;
};
