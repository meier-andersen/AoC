export const parse = (input) => {
  let data;
  input.forEach((element) => {
    element = element
    .replace("To continue, please consult the code grid in the manual.  Enter the code at row ", "")
    .replace(".", "")
    .split(", column ")
    const obj = {
      r: parseInt(element[0]),
      c: parseInt(element[1])
    }
    data = obj;
  });
  return data;
};
