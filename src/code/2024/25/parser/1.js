export const parse = (input) => {
  const data = {
    locks: [],
    keys: [],
  };

  let p = [0, 0, 0, 0, 0];
  let isLock = null;
  input.forEach((element) => {
    if (!element) {
      if (isLock) data.locks.push(p);
      else data.keys.push(p);
      p = [0, 0, 0, 0, 0];
      isLock = null;
    } else if (isLock === null) {
      isLock = element === "#####";
      if (!isLock) p = [-1, -1, -1, -1, -1];
    } else {
      element = element.split("");
      for (let i = 0; i < element.length; i++) {
        p[i] += element[i] === "#" ? 1 : 0;
      }
    }
  });

  if (isLock) data.locks.push(p);
  else data.keys.push(p);

  return data;
};
