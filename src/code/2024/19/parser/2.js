export const parse = (input) => {
  const data = {
    towels: null,
    designs: [],
  };
  input.forEach((element) => {
    if (!data.towels) data.towels = element.split(", ").map((x) => x.split(""));
    else if (element) data.designs.push(element.split(""));
  });
  return data;
};
