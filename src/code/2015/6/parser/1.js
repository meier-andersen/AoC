export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    let opr = null;
    if (element.includes("on")) opr = "on";
    else if (element.includes("off")) opr = "off";
    else opr = "toggle";

    element = element
      .replace("turn on ", "")
      .replace("toggle ", "")
      .replace("turn off", "")
      .split(" through ");
    const start = element[0].split(",");
    const end = element[1].split(",");
    const obj = {
      rowS: parseInt(start[0]),
      colS: parseInt(start[1]),
      rowE: parseInt(end[0]),
      colE: parseInt(end[1]),
      opr,
    };
    data.push(obj);
  });
  return data;
};
