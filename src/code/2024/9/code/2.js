export const run = (input) => {
  let res = 0;
  let currId = input[input.length - 1].id;

  while (currId > 0) {
    const currElemIndex = input.findIndex((x) => x.id === currId && x.isData);
    const currElem = input[currElemIndex];
    const matchIndex = input.findIndex((x) => x.num >= currElem.num && !x.isData);

    if (matchIndex !== -1 && currElemIndex > matchIndex) {
      const match = input[matchIndex];
      input.splice(currElemIndex, 1, {
        id: "X",
        num: currElem.num,
        isData: false,
      });

      if (currElem.num === match.num) {
        match.isData = true;
        match.id = currElem.id;
      } else {
        input.splice(matchIndex, 0, {
          id: currElem.id,
          num: currElem.num,
          isData: true,
        });
        match.num -= currElem.num;
      }
    }

    for (let i = 0; i < input.length - 1; i++) {
      if (!input[i].isData && !input[i + 1].isData) {
        input[i].num += input[i + 1].num;
        input.splice(i + 1, 1);
      }
    }

    currId--;
  }

  let id = 0;
  input.forEach((item) => {
    for (let i = 0; i < item.num; i++) {
      if (item.isData) res += id * item.id;
      id++;
    }
  });
  return res;
};
