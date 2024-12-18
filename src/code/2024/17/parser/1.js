export const parse = (input) => {
  const data = {
    rA: null,
    rB: null,
    rC: null,
    opr: [],
  };
  input.forEach((element) => {
    if (element.includes("A:")) data.rA = parseInt(element.replace("Register A:", ""));
    else if (element.includes("B:")) data.rB = parseInt(element.replace("Register B:", ""));
    else if (element.includes("C:")) data.rC = parseInt(element.replace("Register C:", ""));
    else if (element.includes("Program"))
      data.opr = element
        .replace("Program: ", "")
        .split(",")
        .map((x) => parseInt(x));
  });
  return data;
};
