export const run = (input) => {

  let pos = 50;
  let res = 0;
  input.forEach(curr => {
    if(curr.dir === "L")
      pos -= curr.count;
    else 
      pos += curr.count;

    while(pos < 0) 
      pos += 100;
    while(pos > 99)
      pos -= 100;

    if(pos === 0)
      res++;
  });
  return res;
};
