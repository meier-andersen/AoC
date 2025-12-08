export const run = (input) => {
  const calculatedDistances = calculateAllDistances(input);
  mergeBoxes(input, calculatedDistances);
  return calculateScore(input);
};

const calculateScore = (boxes) => {
  let groupSizes = [];
  boxes.forEach((box) => {
    if (box.group === -1) return;
    let existingGroup = groupSizes.find((x) => x.id === box.group);
    if (existingGroup) existingGroup.size++;
    else groupSizes.push({ id: box.group, size: 1 });
  });

  groupSizes.sort((a, b) => b.size - a.size);

  return groupSizes[0].size * groupSizes[1].size * groupSizes[2].size;
};

const mergeBoxes = (boxes, distances) => {
  let nextGroupId = 0;
  const iterations = boxes.length > 100 ? 1000 : 10;
  for (let i = 0; i < iterations; i++) {
    const currDistance = distances[i];
    const first = boxes.find((x) => x.id === currDistance.first);
    const second = boxes.find((x) => x.id === currDistance.second);
    if (first.group === -1 && second.group === -1) {
      first.group = nextGroupId;
      second.group = nextGroupId;
      nextGroupId++;
    } else if (first.group === -1) first.group = second.group;
    else if (second.group === -1) second.group = first.group;
    else {
      const wrongId = second.group;
      boxes.forEach((box) => {
        if (box.group === wrongId) {
          box.group = first.group;
        }
      });
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
