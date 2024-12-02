export const run = (input) => {
  let res = 0;

  input.forEach((line) => {
    let curr = line[0];
    let isUp = null;
    for (let i = 1; i < line.length; i++) {
      let next = line[i];

      if (i === 1) isUp = next > curr;

      let diff = Math.abs(curr - next);
      if (diff < 1 || diff > 3) return;

      if (isUp && curr > next) return;

      if (!isUp && curr < next) return;

      curr = next;
    }
    res++;
  });
  return res;
};
