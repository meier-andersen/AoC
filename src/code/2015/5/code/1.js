export const run = (input) => {
  let res = 0;
  input.forEach(line => {
    res += tryLine(line);
  })
  return res;
};

const tryLine = line => {
  for(let i = 0; i < noStrings.length; i++) {
    if(line.includes(noStrings[i])) {
      return 0;
    }
  }

  let lineVowels = 0;
  let lineDuplicates = false;
  let last = null;
  line.split("").forEach(char => {
    if(char === last)
      lineDuplicates = true;
    if(vowels.includes(char))
      lineVowels++;

    last = char
  })

  return lineVowels >= 3 && lineDuplicates ? 1 : 0;
}

const vowels = "aeiou";
const noStrings = ["ab", "cd", "pq", "xy"]