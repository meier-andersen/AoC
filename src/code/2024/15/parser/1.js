export const parse = (input) => {
  const data = {
    map: [],
    opr: [],
  };

  let mapMode = true;
  input.forEach((element) => {
    if (!element) {
      mapMode = false;
    } else {
      if (mapMode) data.map.push(element.split(""));
      else data.opr = data.opr.concat(element.split(""));
    }
  });
  return data;
};
