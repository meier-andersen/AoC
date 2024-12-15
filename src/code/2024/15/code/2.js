export const run = (input) => {
  const map = expandMap(input.map);
  input.opr.forEach((opr) => {
    tryMove(map, opr);
  });
  //printMap(map);

  return calcRes(map);
};

const tryMove = (map, opr) => {
  changes = [];
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

let changes = [];
const moveGeneric = (map, offR, offC) => {
  const pos = findRobot(map);
  if (canMove(map, pos.r + offR, pos.c + offC, offR, offC)) {
    sortChanges(changes);
    changes.forEach((box) => {
      map[box.r][box.c] = box.v;
    });

    map[pos.r][pos.c] = ".";
    map[pos.r + offR][pos.c + offC] = "@";
  }
};

const sortChanges = (changes) => {
  changes.sort((a, b) => {
    if (a.v === "." && b.v !== ".") return -1;
    if (a.v !== "." && b.v === ".") return 1;
    return 0;
  });
};

const canMove = (map, r, c, rowOff, colOff) => {
  const newPos = map[r][c];
  if (newPos === "#") return false;

  if (newPos === ".") return true;

  if (rowOff === 0) {
    if (canMove(map, r + rowOff, c + colOff, rowOff, colOff)) {
      map[r + rowOff][c + colOff] = newPos;
      return true;
    }
    return false;
  } else if (newPos === "[") {
    if (
      canMove(map, r + rowOff, c + colOff, rowOff, colOff) &&
      canMove(map, r + rowOff, c + colOff + 1, rowOff, colOff)
    ) {
      changes = changes.concat([
        { r: r + rowOff, c: c + colOff, v: "[" },
        { r: r + rowOff, c: c + colOff + 1, v: "]" },
        { r: r, c: c, v: "." },
        { r: r, c: c + 1, v: "." },
      ]);
      return true;
    }
    return false;
  } else {
    if (
      canMove(map, r + rowOff, c + colOff, rowOff, colOff) &&
      canMove(map, r + rowOff, c + colOff - 1, rowOff, colOff)
    ) {
      changes = changes.concat([
        { r: r + rowOff, c: c + colOff - 1, v: "[" },
        { r: r + rowOff, c: c + colOff, v: "]" },
        { r: r, c: c - 1, v: "." },
        { r: r, c: c, v: "." },
      ]);
      return true;
    }
    return false;
  }
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
      if (curr === "[") res += r * 100 + c;
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

const expandMap = (map) => {
  const newMap = [];

  map.forEach((row) => {
    let newRow = [];
    row.forEach((pos) => {
      if (pos === "#") newRow = newRow.concat(["#", "#"]);
      else if (pos === "O") newRow = newRow.concat(["[", "]"]);
      else if (pos === "@") newRow = newRow.concat(["@", "."]);
      else newRow = newRow.concat([".", "."]);
    });

    newMap.push(newRow);
  });
  return newMap;
};
