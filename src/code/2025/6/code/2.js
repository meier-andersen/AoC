export const run = (input) => {
  let res = 0;

  input.forEach((line) => {
    let lineRes = 0;
    line.group.forEach((elem) => {
      if (lineRes === 0) lineRes = elem;
      else if (line.opr === "+") lineRes += elem;
      else lineRes *= elem;
    });
    res += lineRes;
  });
  return res;
};
