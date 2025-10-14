export const run = (input) => {
  return findTLS(input);
};

const findTLS = lines => {
  let res = 0;

  lines.forEach(line => {
    let isMatch = false;
    let isInSideBrackets = false;
    for(let i = 0; i < line.length-3; i++) 
    {
      if(line[i] === "[") 
        isInSideBrackets = true;
      else if(line[i] === "]")
        isInSideBrackets = false;
      else if(line[i] === line[i+3] && line[i+1] === line[i+2] && line[i] !== line[i+1]) {
          if(isInSideBrackets) 
            return;
          else 
            isMatch = true;
        }
    }

    if(isMatch)
      res++;

  })

  return res;
}