export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    const obj = {};
    if(element.includes("rect"))
    {
      obj.type = "rect";
      element = element.replace("rect ", "").split("x");
      obj.w = parseInt(element[0]);
      obj.t = parseInt(element[1]);
    }
    else 
    {
      obj.type = "rotate"
      obj.dir = element.includes("column") ? "col" : "row";
      element = element.replace("rotate ", "").replace("column x=", "").replace("row y=", "").split(" by ");
      obj.line = parseInt(element[0]);
      obj.offset = parseInt(element[1]);
    }
    data.push(obj);
  });
  return data;
};
