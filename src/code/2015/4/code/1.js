import md5 from "md5";
export const run = (input) => {
  let line = input[0];
  let i = 0;
  while (true) {
    i++;
    const hash = md5(`${line}${i}`);
    if (hash.slice(0, 5) === "00000") {
      return i;
    }
  }
};
