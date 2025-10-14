export const run = (input) => {
  return findTLS(input);
};

const findTLS = lines => {
  let res = 0;

  lines.forEach(line => {
    let abas = [];
    let babs = [];

    let isInSideBrackets = false;
    for(let i = 0; i < line.length-2; i++) 
    {
      if(line[i] === "[") 
        isInSideBrackets = true;
      else if(line[i] === "]")
        isInSideBrackets = false;
      else if(line[i] === line[i+2] && line[i] !== line[i+1]) 
      {
        const key = `${line[i]}${line[i+1]}${line[i]}`;
        const oppositKey = `${line[i+1]}${line[i]}${line[i+1]}`;
        if(isInSideBrackets) {
          const match = abas.find(x => x === oppositKey);
          if(match) {
            res++;
            return;
          }
          babs.push(key);
        }
        else {
          const match = babs.find(x => x === oppositKey);
          if(match) {
            res++;
            return;
          }
          abas.push(key);
        }
      }
    }
  })

  return res;
}