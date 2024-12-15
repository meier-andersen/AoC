export const run = (input) => {
  const map = input.map;
  input.opr.forEach((opr) => {
    tryMove(map, opr);
  });
  return calcRes(map);
};

const tryMove = (map, opr) => {
  switch (opr) {
    case "<":
      moveGeneric(map, 0, -1);
      break;
    case ">":
      moveGeneric(map, 0, 1);
      break;
    case "^":
      moveGeneric(map, -1, 0);
      break;
    case "v":
      moveGeneric(map, 1, 0);
      break;
  }
};

const moveGeneric = (map, offR, offC) => {
  const pos = findRobot(map);
  if (canMove(map, pos.r + offR, pos.c + offC, offR, offC)) {
    map[pos.r][pos.c] = ".";
    map[pos.r + offR][pos.c + offC] = "@";
  }
};

const canMove = (map, r, c, rowOff, colOff) => {
  const newPos = map[r][c];
  if (newPos === "#") return false;
  if (newPos === ".") return true;
  if (canMove(map, r + rowOff, c + colOff, rowOff, colOff)) {
    map[r + rowOff][c + colOff] = "O";
    return true;
  }
  return false;
};

const findRobot = (map) => {
  const r = map.findIndex((row) => row.includes("@"));
  const c = map[r].indexOf("@");
  return { r, c };
};

const calcRes = (map) => {
  let res = 0;

  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      const curr = map[r][c];
      if (curr === "O") res += r * 100 + c;
    }
  }
  return res;
};

const printMap = (map) => {
  map.forEach((line) => {
    let str = "";
    line.forEach((pos) => {
      str += pos;
    });
    console.log(str);
  });
};
