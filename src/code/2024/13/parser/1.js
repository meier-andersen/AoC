export const parse = (input) => {
  const data = [];
  let a = null;
  let b = null;
  input.forEach((element) => {
    if(!element) {
      a = null;
      b = null;
    }
    else if(!a) {
      element = element.replace("Button A: X+", "").split(", Y+");
      a = {  x: parseInt(element[0]), y: parseInt(element[1])}
    }
    else if(!b) {
      element = element.replace("Button B: X+", "").split(", Y+");
      b = {  x: parseInt(element[0]), y: parseInt(element[1])}
    }
    else {
      element = element.replace("Prize: X=", "").split(", Y=");
      const price = {  x: parseInt(element[0]), y: parseInt(element[1])}
      
      data.push({price, a, b})
    }
  });
  return data;
};
