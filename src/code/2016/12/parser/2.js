export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(" ");
    const obj = {
      ins: element[0]
    }
    if(element[0] === "cpy") {
      obj.reg = element[2];
      if(parseInt(element[1])) 
        obj.val = parseInt(element[1]);
      else 
        obj.cmp = element[1];
    }
    else if(element[0] === "jnz") {
      obj.cmp = element[1];
      obj.val = parseInt(element[2]);
    }
    else {
      obj.reg = element[1];
    }
    data.push(obj);
  });
  return data;
};
