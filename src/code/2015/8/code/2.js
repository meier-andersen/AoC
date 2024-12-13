export const run = (input) => {
  let res = 0;
  input.forEach((line) => {
    res += tryLine(line);
  });
  return res;
};

const tryLine = (line) => {
  const length = line.length;
  let newLine = '"';
  line.split("").forEach((char) => {
    if (char === '"') {
      newLine += `\\"`;
    } else if (char === "\\") {
      newLine += "\\\\";
    } else newLine += char;
  });
  newLine += '"';

  return newLine.length - length;
};
