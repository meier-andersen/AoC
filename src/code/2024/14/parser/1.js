export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(" ");

    let p = element[0]
      .replace("p=", "")
      .split(",")
      .map((x) => parseInt(x));
    let v = element[1]
      .replace("v=", "")
      .split(",")
      .map((x) => parseInt(x));

    data.push({
      p: {
        r: p[1],
        c: p[0],
      },
      v: {
        r: v[1],
        c: v[0],
      },
    });
  });
  return data;
};
