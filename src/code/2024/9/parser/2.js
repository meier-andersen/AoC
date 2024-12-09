export const parse = (input) => {
  let data = [];

  let isData = true;
  let id = 0;
  input.forEach((element) => {
    element = element.split("");
    element.forEach((char) => {
      data.push({
        id: isData ? id : "X",
        num: parseInt(char),
        isData,
      });
      if (isData) id++;

      isData = !isData;
    });
  });
  return data;
};
