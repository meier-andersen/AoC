export const run = (input) => {
  const calculatedDistances = calculateAllDistances(input);

  return mergeBoxes(input, calculatedDistances);
};

const mergeBoxes = (boxes, distances) => {
  let uniqueNumbers = boxes.length;

  for (let i = 0; i < distances.length; i++) {
    const currDistance = distances[i];
    const first = boxes.find((x) => x.id === currDistance.first);
    const second = boxes.find((x) => x.id === currDistance.second);
    if (first.group === -1) {
      first.group = 0;
      uniqueNumbers--;
    }
    if (second.group === -1) {
      second.group = 0;
      uniqueNumbers--;
    }

    if (uniqueNumbers < 1) {
      return first.x * second.x;
    }
  }
};

const calculateAllDistances = (boxes) => {
  const calculatedDistances = [];
  for (let f = 0; f < boxes.length; f++) {
    for (let s = f + 1; s < boxes.length; s++) {
      const first = boxes[f];
      const second = boxes[s];

      const distance = calcDistance(first, second);
      calculatedDistances.push({ first: first.id, second: second.id, dist: distance });
    }
  }

  calculatedDistances.sort((a, b) => a.dist - b.dist);

  return calculatedDistances;
};

const calcDistance = (obj1, obj2) => {
  const dx = obj2.x - obj1.x;
  const dy = obj2.y - obj1.y;
  const dz = obj2.z - obj1.z;

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};
