export const run = (input) => {
  let pos = 50;
  let res = 0;
  input.forEach(curr => {
    for(let i = 0; i < curr.count; i++) {
      pos += curr.dir === "L" ? -1 : 1;

      if(pos < 0) pos = 99;
      if(pos > 99) pos = 0

      if(pos === 0)
        res++;
    }
  });
  
  return res;
};
