export const run = (map) => {
  id = 0;
  gardens = [];

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      const curr = map[row][col];
      if (curr.farm === -1) {
        buildGarden(row, col, map);
      }
    }
  }
  let res = 0;
  gardens.forEach((garden) => {
    res += calcPrice(garden);
  });
  return res;
};

const calcPrice = (garden) => {
  let size = garden.plots.length;
  let sides = 0;
  garden.plots.forEach((plot) => {
    const hasNorth = !!garden.plots.find((x) => x.row === plot.row - 1 && x.col === plot.col);
    const hasSouth = !!garden.plots.find((x) => x.row === plot.row + 1 && x.col === plot.col);
    const hasEast = !!garden.plots.find((x) => x.row === plot.row && x.col === plot.col + 1);
    const hasWest = !!garden.plots.find((x) => x.row === plot.row && x.col === plot.col - 1);
    const hasNorthWest = !!garden.plots.find((x) => x.row === plot.row - 1 && x.col === plot.col - 1);
    const hasNorthEast = !!garden.plots.find((x) => x.row === plot.row - 1 && x.col === plot.col + 1);
    const hasSouthWest = !!garden.plots.find((x) => x.row === plot.row + 1 && x.col === plot.col - 1);
    const hasSouthEast = !!garden.plots.find((x) => x.row === plot.row + 1 && x.col === plot.col + 1);

    if (!hasNorth && !hasEast) sides++;
    if (!hasNorth && !hasWest) sides++;
    if (!hasSouth && !hasEast) sides++;
    if (!hasSouth && !hasWest) sides++;
    if (hasNorth && hasEast && !hasNorthEast) sides++;
    if (hasNorth && hasWest && !hasNorthWest) sides++;
    if (hasSouth && hasEast && !hasSouthEast) sides++;
    if (hasSouth && hasWest && !hasSouthWest) sides++;
  });
  return size * sides;
};

let id;
let gardens = [];
const buildGarden = (row, col, map) => {
  id++;
  gardens.push({ id, plots: [] });
  setplot(row, col, map[row][col].val, map);
};

const setplot = (row, col, val, map) => {
  if (map[row][col].farm !== -1) return;
  if (map[row][col].val !== val) return;

  const farm = gardens.find((x) => x.id === id);
  farm.plots.push({ row, col });

  map[row][col].farm = id;
  if (row > 0) setplot(row - 1, col, val, map);
  if (row < map.length - 1) setplot(row + 1, col, val, map);
  if (col > 0) setplot(row, col - 1, val, map);
  if (col < map[row].length - 1) setplot(row, col + 1, val, map);
};
