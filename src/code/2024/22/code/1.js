export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += runLine(line);
  });
  return res;
};

const runLine = (secret) => {
  for (let i = 0; i < 2000; i++) {
    secret = step3(step2(step1(secret)))
  }
  return secret;
};

const step1 = (secret) => {
  let newNum = secret * 64;
  newNum = mix(newNum, secret);
  newNum = prune(newNum);
  return newNum;
};

const step2 = (secret) => {
  let newNum = secret / 32;
  newNum = Math.floor(newNum);
  newNum = mix(newNum, secret);
  newNum = prune(newNum);
  return newNum;
};

const step3 = (secret) => {
  let newNum = secret * 2048;
  newNum = Math.floor(newNum);
  newNum = mix(newNum, secret);
  newNum = prune(newNum);
  return newNum;
};

const mix = (num, secret) => {
  return (num ^ secret) >>> 0;
};

const prune = (secret) => {
  return secret % 16777216;
};
