export const run = (input) => {
  let pairs = [];
  let res = 0;

  let enabled = true;
  input.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
      if (enabled) {
        if (line[i] === "d" && line.substring(i, i + 7) === "don't()")
          enabled = false;
        else if (line[i] === "m") {
          if (line[i + 1] !== "u" || line[i + 2] !== "l" || line[i + 3] !== "(")
            continue;
          let subString = line.substring(i, i + 12);
          const matches = subString.match(/mul\(\d+,\d+\)/g);
          if (matches) {
            pairs = pairs.concat(matches);
          }
          i += 7;
        }
      } else if (line[i] === "d" && line.substring(i, i + 4) === "do()")
        enabled = true;
    }
  });

  pairs.forEach((pair) => {
    pair = pair.replace("mul(", "").replace(")", "").split(",");
    res += parseInt(pair[0]) * parseInt(pair[1]);
  });
  return res;
};
