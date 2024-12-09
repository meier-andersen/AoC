export const run = (input) => {
  while (input.filter((x) => !x.isData).length > 0) {
    const firstFree = input.find((x) => !x.isData);
    const lastOccupied = input.filter((x) => x.isData).at(-1);
    const firstFeeIndex = input.findIndex(
      (x) => x.id === firstFree.id && !x.isData
    );

    if (firstFree.id > lastOccupied) break;

    if (firstFree.id === lastOccupied.id) {
      input.splice(firstFeeIndex, 1);
    }
    //First free er størst
    else if (firstFree.num > lastOccupied.num) {
      firstFree.num -= lastOccupied.num;
      input.splice(firstFeeIndex, 0, {
        id: lastOccupied.id,
        num: lastOccupied.num,
        isData: true,
      });
      input.pop();
    }
    //Lige store
    else if (firstFree.num === lastOccupied.num) {
      firstFree.id = lastOccupied.id;
      firstFree.isData = true;
      input.pop();
    }
    //Last occupied er størst
    else {
      input.splice(firstFeeIndex, 1, {
        id: lastOccupied.id,
        num: firstFree.num,
        isData: true,
      });
      lastOccupied.num -= firstFree.num;
    }

    if (!input[input.length - 1].isData) input.pop();
  }

  let res = 0;
  let id = 0;
  input.forEach((item) => {
    for (let i = 0; i < item.num; i++) {
      res += id * item.id;
      id++;
    }
  });
  return res;
};
