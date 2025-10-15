export const run = (input) => {
  const res = runSimulation(input);
  return res;
};

const runSimulation = str => {
  for(let i = 0; i < str.length; i++) {
    if(str[i] === "(") {
      const substr = str.slice(i, i+10);
      const index = substr.findIndex(x => x === ")");
      if(index !== -1) {
        const middle = str.slice(i+1, i+index).join("").split("x");
        const numChars = parseInt(middle[0]);
        const repeatChars = str.slice(i+index+1, i+index+1+numChars).join("");
        const times = parseInt(middle[1]);

        str.splice(i, index+1);

        for(let j = 0; j < times - 1; j++) {
          str.splice(i, 0, ...repeatChars);
        }
        i += (numChars * times) - 1;
      }
    }
  }
  return str.length;
}