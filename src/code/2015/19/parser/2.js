export const parse = (input) => {
  const data = {
    trans: [],
    str: null,
  };

  let transMode = true;
  input.forEach((element) => {
    if (!element) transMode = false;
    else if (transMode) {
      element = element.split(" => ");
      data.trans.push({ from: element[0], to: element[1] });
    } else data.str = element;
  });
  return data;
};
