export const run = (input) => {
  let res = 0;

  input.forEach((line) => {
    if (tryLine(line)) res++;
  });
  return res;
};

const tryLine = (line) => {
  if (isValid(line)) {
    return true;
  }

  for (let i = 0; i < line.length; i++) {
    const newLine = [...line.slice(0, i), ...line.slice(i + 1)];
    if (isValid(newLine)) {
      return true;
    }
  }

  return false;
};

const isValid = (arr) => {
  let isUp = arr[1] > arr[0];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (
      diff < 1 ||
      diff > 3 ||
      (isUp && arr[i] < arr[i - 1]) ||
      (!isUp && arr[i] > arr[i - 1])
    ) {
      return false;
    }
  }
  return true;
};
