export const run = (input) => {

  let foundRes = false;
  const visited = new Map();
  let queue = [{key: "e", steps: 0}]
  while(queue.length > 0) {
    const curr = queue.shift();

    const newQueue = findLines(input.trans, curr.key, curr.steps);
    newQueue.forEach(item => {
      if(item.key === input.str) {
        foundRes = item.steps;
        return;
      }
      if(item.key.length >= input.str.length)
        return;
      if(visited.has(item.key))
        return;
      queue.push(item);
      visited.set(item.key, true);
    })
    if(foundRes)
      return foundRes;

    queue.sort((a,b) => b.key.length - a.key.length)
  }

  return -1;
};

const findLines = (trans, str, steps) => {
  const matches = new Map();
  const resp = [];

  trans.forEach((transition) => {
    const indexes = findAllIndexes(str, transition.from);
    indexes.forEach((index) => {
      const key = str.substring(0, index) + transition.to + str.substring(index + transition.from.length);
      if (!matches.has(key)) {
        matches.set(key, true);
        resp.push({key, steps: steps+1});
      }
    });
  });
  return resp;
};

const findAllIndexes = (str, tran) => {
  const indexes = [];
  let startIndex = 0;

  while ((startIndex = str.indexOf(tran, startIndex)) !== -1) {
    indexes.push(startIndex);
    startIndex += tran.length;
  }

  return indexes;
};
