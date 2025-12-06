export const run = (input) => {
  return findRes(input);
};

const findRes = (lines) => {
  let res = 0;

  for (let col = 0; col < lines[0].length; col++) {
    let lineRes = 0;
    const currOpr = lines[lines.length - 1][col];
    for (let line = 0; line < lines.length - 1; line++) {
      const curr = lines[line][col];
      if (lineRes === 0) lineRes = curr;
      else if (currOpr === "+") lineRes += curr;
      else lineRes *= curr;
    }

    res += lineRes;
  }

  return res;
};
