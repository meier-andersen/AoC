export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    const obj = {};
    if(element.includes("swap position")) {
      element = element.replace("swap position ", "").replace("with position ", "").split(" ");
      obj.type = "SwapPos";
      obj.pos1 = parseInt(element[0]);
      obj.pos2 = parseInt(element[1]);
    }
    else if(element.includes("swap letter")) {
      element = element.replace("swap letter ", "").replace("with letter ", "").split(" ");
      obj.type = "SwapLet";
      obj.pos1 = element[0];
      obj.pos2 = element[1];
    }
    else if(element.includes("rotate left") || element.includes("rotate right")) {
      if(element.includes("left"))
        obj.type = "RotateLeft";
      else 
        obj.type = "RotateRight";
      element = element.replace("rotate left ", "").replace("rotate right ", "").replace("steps", "").replace("step", "");
      obj.steps = parseInt(element);
    }
    else if(element.includes("rotate based on position")) {
      element = element.replace("rotate based on position of letter ", "");
      obj.type = "RotatePosLetter";
      obj.pos1 = element;
    }
    else if(element.includes("reverse positions")) {
      element = element.replace("reverse positions ", "").replace("through ", "").split(" ");
      obj.type = "ReversePos";
      obj.pos1 = parseInt(element[0]);
      obj.pos2 = parseInt(element[1]);
    }
    else if(element.includes("move position")) {
      element = element.replace("move position ", "").replace("to position ", "").split(" ");
      obj.type = "MovePos";
      obj.pos1 = parseInt(element[0]);
      obj.pos2 = parseInt(element[1]);
    }
    
    data.push(obj);
  });
  return data;
};
