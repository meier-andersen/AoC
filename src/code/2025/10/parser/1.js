export const parse = (input) => {
  const data = [];
  let mode = -1;
  input.forEach((element) => {
    const obj = {
      lg: "",
      btns: [],
    };
    element = element.split(" ");
    element.forEach((group) => {
      if (group[0] === "[") {
        group = group.split("");
        group.forEach((char) => {
          if (char !== "[" && char !== "]") obj.lg += char;
        });
      } else if (group[0] !== "{") {
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
