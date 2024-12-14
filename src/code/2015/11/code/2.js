export const run = (input) => {
  let curr = input;
  for(let i = 0; i < 2; i++) {
    let found = false;
    while (!found) {
      curr = generateNextPassword(curr);
      if (isvalid(curr)) found = true;
    }
  }

  return curr.join("")
};

const generateNextPassword = (password) => {
  for (let i = password.length - 1; i >= 0; i--) {
    password[i] = incrementLetter(password[i]);
    if (password[i] !== "a") return password;
  }
};

const incrementLetter = (letter) => {
  do {
    letter = letter === "z" ? "a" : String.fromCharCode(letter.charCodeAt(0) + 1);
  } while (["i", "o", "l"].includes(letter)); // Skip i, o, l

  return letter;
};

const isvalid = (password) => {
  if (password.find((x) => x === "i" || x === "o" || x === "l")) return false;

  let ruleOne = [];
  let pairOne = null;
  let pairTwo = null;
  for (let i = 0; i < password.length; i++) {
    const uni = password[i].charCodeAt(0);
    if (!pairOne) {
      if (password[i] === password[i + 1]) pairOne = password[i];
    } else if (pairOne && !pairTwo) {
      if (password[i] === password[i + 1] && password[i] !== pairOne) pairTwo = password[i];
    }
    if (ruleOne.length < 3) {
      if (ruleOne.length === 0) {
        ruleOne.push(uni);
      } else if (ruleOne[ruleOne.length - 1] + 1 === uni) {
        ruleOne.push(uni);
      } else {
        ruleOne = [uni];
      }
    }
  }
  return !!pairOne && !!pairTwo && ruleOne.length === 3;
};

const getUniCode = (c) => {
  return c.charCodeAt(0);
};
