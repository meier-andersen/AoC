import md5 from "md5";

export const run = (input) => {
  return findPath(input);
};

const findPath = salt => {
  let queue = [ {r: 0, c: 0, p: ""} ];
  let head = 0; 
  while(head < queue.length) {
    const curr = queue[head++];
    if(curr.r === 3 && curr.c === 3) 
      return curr.p;
    
    const hash = md5(`${salt}${curr.p}`);
    if(curr.r > 0 && isOpen(hash[0])) {
      queue.push(buildObj(curr, -1, 0, "U"));
    }
    if(curr.r < 3 && isOpen(hash[1])) {
      queue.push(buildObj(curr, 1, 0, "D"));
    }
    if(curr.c > 0 && isOpen(hash[2])) {
      queue.push(buildObj(curr, 0, -1, "L"));
    }
    if(curr.c < 3 && isOpen(hash[3])) {
      queue.push(buildObj(curr, 0, 1, "R"));      
    }
  }
}

const buildObj = (org, r, c, d) => {
  return {
    r: org.r + r,
    c: org.c + c,
    p: `${org.p}${d}`
  };
}

const isOpen = char => {
  return openDoors.includes(char);
}

const openDoors = ["b", "c", "d", "e", "f"];

