export const parse = (input) => {
  const data = [];
  let mode = -1;
  input.forEach((element) => {
    const obj = {
      btns: [],
    };
    element = element.split(" ");
    element.forEach((group) => {
      if (group[0] === "{") {
        obj.jol = group.replace("{","").replace("}","").split(",").map(x => parseInt(x, 10));
      } else if (group[0] !== "[") {
        group = group.split("");
        const btnGroup = [];
        group.forEach((char) => {
          if (parseInt(char) || char === "0") btnGroup.push(parseInt(char));
        });
        obj.btns.push(btnGroup);
      }
    });
    data.push(obj);
  });
  return data;
};
