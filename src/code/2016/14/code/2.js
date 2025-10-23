import md5 from "md5";

export const run = (input) => {
  return runSimulation(input);
};

const runSimulation = salt => {
  let currTri = 0;
  let currQua = -1;

  const hashes = [];
  const foundQua = [];
  const found = [];
  while (true) {
    currTri++;

    while(currQua < currTri + 1000) {
      currQua++;
      let hashQua = md5(`${salt}${currQua}`);
      for(let x = 0; x < 2016; x++) {
        hashQua = md5(hashQua);
      }
      hashes.push(hashQua);
      const quadruple = findRepeated(hashQua, 5);
      if(quadruple) {
        foundQua.push({char: quadruple, loc: currQua});
      }
    }

    const hash = hashes[currTri-1];
    const triplet = findRepeated(hash, 3);
    if(triplet) {
      const match = foundQua.find(x => x.char === triplet && x.loc > currTri);
      if(match) {
        found.push({char: triplet, loc: currTri});
        if(found.length === 64)
          return currTri;
      }
    } 
  }
}

const findRepeated = (str, count) => {
  const regex = new RegExp(`(.)\\1{${count - 1}}`);
  const match = str.match(regex);
  return match ? match[1] : null;
};