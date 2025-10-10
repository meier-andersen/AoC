export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(",");
    const split = element[0].split(" ");

    const obj = {
      opr: split[0]
    }
    if(split[1] && split[0] !== "jmp")
      obj.reg = split[1];
    if(element[1])
      obj.stp = parseInt(element[1]);
    if(split[0] === "jmp")
      obj.stp = parseInt(split[1]); 
    data.push(obj);
  });
  return data;
};
