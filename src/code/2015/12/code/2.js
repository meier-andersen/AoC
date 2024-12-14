export const run = (input) => {
  const obj = JSON.parse(input);
  return calcElem(obj);
};

const calcElem = (elem) => {
  let res = 0;

  if (Array.isArray(elem)) {
    elem.forEach((c) => {
      res += calcElem(c);
    });
  } else if (Number.isInteger(parseInt(elem))) {
    return parseInt(elem);
  } else if (typeof elem === "object") {
    let containsRed = false;
    Object.values(elem).forEach((c) => {
      if (c === "red") containsRed = true;
    });
    if (containsRed) return 0;

    Object.values(elem).forEach((c) => {
      res += calcElem(c);
    });
  }

  return res;
};
