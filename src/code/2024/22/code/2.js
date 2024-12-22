export const run = (input) => {
  let res = 0;
  let memory = new Map();
  input.forEach((line) => {
    runLine(line, memory);
  });

  for (const value of memory.values()) {
    if (value > res) res = value;
  }
  return res;
};

const runLine = (secret, memory) => {
  const localMemory = new Map();
  const sequence = [];
  let last = lastDigit(secret);
  for (let i = 0; i < 2000; i++) {
    last = lastDigit(secret);
    secret = step3(step2(step1(secret)));
    const curr = lastDigit(secret);
    const diff = curr - last;
    sequence.push(diff);
    if (sequence.length > 4) sequence.shift();

    if (sequence.length === 4) {
      const key = sequence.join(",");
      if (!localMemory.has(key)) {
        localMemory.set(key, true);
        if (!memory.has(key)) memory.set(key, curr);
        else memory.set(key, memory.get(key) + curr);
      }
    }
  }
};

const lastDigit = (num) => {
  return num % 10;
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
