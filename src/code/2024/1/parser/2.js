export const parse = (input) => {
  const data = {
    l1: [],
    l2: [],
  };
  input.forEach((element) => {
    let nums = element.split("   ");

    data.l1.push(parseInt(nums[0]));

    const match2 = data.l2.find((x) => x.id === parseInt(nums[1]));
    if (match2) {
      match2.num++;
    } else {
      data.l2.push({ id: parseInt(nums[1]), num: 1 });
    }
  });
  return data;
};
