export const parse = (input) => {
  const data = [];

  let group = [];
  for (let col = 0; col < input[0].length; col++) {
    let currNum = "";
    for (let row = 0; row < input.length - 1; row++) {
      const curr = input[row][col].trim();
      if (!curr) continue;
      currNum = `${currNum}${curr}`;
    }
    if (currNum) group.push(parseInt(currNum));
    else {
      data.push({ group });
      group = [];
    }
  }
  if (group.length > 0) data.push({ group });

  let currIndex = 0;
  for (let col = 0; col < input[0].length; col++) {
    const curr = input[input.length - 1][col].trim();
    if (curr) {
      data[currIndex].opr = curr;
      currIndex++;
    }
  }
  return data;
};
