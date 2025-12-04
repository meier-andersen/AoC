export const parse = (input) => {
  const data = new Set();
  let row = -1;
  input.forEach((element) => {
    row++;
    for (let col = 0; col < element.length; col++) {
      if (element[col] === "@") data.add(`${row},${col}`);
    }
  });
  return data;
};
