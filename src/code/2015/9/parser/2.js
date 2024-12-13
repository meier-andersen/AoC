export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    element = element.split(" = ");
    const dist = parseInt(element[1]);
    element = element[0].split(" to ");

    const match1 = data.find((x) => x.name === element[0]);
    if (match1) {
      match1.dist.push({ name: element[1], dist });
    } else {
      data.push({ name: element[0], dist: [{ name: element[1], dist }] });
    }

    const match2 = data.find((x) => x.name === element[1]);
    if (match2) {
      match2.dist.push({ name: element[0], dist });
    } else {
      data.push({ name: element[1], dist: [{ name: element[0], dist }] });
    }
  });
  return data;
};
