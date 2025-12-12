export const parse = (input) => {
  const data = {
    packages: [],
    spaces: [],
  };

  let obj = {};
  input.forEach((element) => {
    if (!element) {
      data.packages.push(obj);
      obj = {};
    } else if (element[1] === ":")
      obj = {
        id: element.replace(":", ""),
        size: 0,
        lines: [],
      };
    else if (obj.id) {
      obj.lines.push(element);
      for (let i = 0; i < element.length; i++) {
        obj.size += element[i] === "#" ? 1 : 0;
      }
    } else {
      element = element.split(": ");
      const size = element[0].split("x").map((x) => parseInt(x));
      const places = element[1].split(" ").map((x) => parseInt(x));

      const space = {
        size,
        area: size[0] * size[1],
        places,
      };
      data.spaces.push(space);
    }
  });
  return data;
};
